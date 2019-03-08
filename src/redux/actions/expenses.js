import uuid from 'uuid';

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
    };
};

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
};

module.exports = {
    addExpense,
    removeExpense,
    editExpense
};