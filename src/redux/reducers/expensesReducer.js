const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // NEVER UPDATE THE ORIGINAL STATE, ALWAYS CREATE A COPY AND UPDATE THAT COPY
            // return state.concat(action.expense);
            return [ ...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(item => item.id !== action.expense.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

export default expensesReducer;