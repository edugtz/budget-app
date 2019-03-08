import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../utils/utils';

const ExpenseList = props => (
    <div>
        <h2>Expense list</h2>
        {props.expenses.map(expense => <ExpenseListItem key={expense.id}  expense={expense}/>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);   