import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
    expenses: [
        {
            id: 1,
            description: 'Rent',
            note: 'This was the final payment for that address',
            amount: 545.00,
            createdAt: 0
        }
    ],
    filters: {
        text: 'Rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// REDUCERS DEFAULT STATE

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// ACTIONS
const addExpense = (payload = {}) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = payload;

    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
};

const removeExpense = (payload = {}) => {
    const { id } = payload;

    return {
        type: 'REMOVE_EXPENSE',
        expense: {
            id
        }
    }
}

// REDUCERS
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // NEVER UPDATE THE ORIGINAL STATE, ALWAYS CREATE A COPY AND UPDATE THAT COPY
            // return state.concat(action.expense);
            return [ ...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(item => item.id !== action.expense.id)
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// COMBINE REDUCERS INTO ONE
const rootReducer = combineReducers({ 
    expenses: expensesReducer, 
    filters: filtersReducer 
});

// CREATE THE STORE
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('running');
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Car', amount: 1000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

console.log(store.getState());