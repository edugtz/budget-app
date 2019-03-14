import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeExpense } from '../redux/actions/expenses';

const handleRemoveExpense = (props) => {
    props.removeExpense({ id: props.expense.id });
};

const ExpenseListItem = (props) => {
    return (
        <div>
            <h3>{props.expense.description}</h3>
            <p>{props.expense.amount} - {props.expense.createdAt}</p>
            <button onClick={() => handleRemoveExpense(props)}>Remove</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeExpense }, dispatch);
};

export default connect(null, mapDispatchToProps)(ExpenseListItem);