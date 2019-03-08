import { createStore, combineReducers } from 'redux';

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

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
        const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        return b.createdAt < a.createdAt ? 1 : -1;
    })
};

// COMBINE REDUCERS INTO ONE
const rootReducer = combineReducers({ 
    expenses: expensesReducer, 
    filters: filtersReducer 
});

// CREATE THE STORE
const store = createStore(rootReducer);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2000, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Car', amount: 1000, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1000, description: 'Edited description' }));
// store.dispatch(setTextFilter('Car'));
// store.dispatch(setTextFilter(''));
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));

// console.log(store.getState());

