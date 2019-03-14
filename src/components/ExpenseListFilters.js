
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTextFilter, sortByAmount, sortByDate } from '../redux/actions/filters';

const handleTextFilterInput = (e, props) => {
    const value = e.target.value;
    props.setTextFilter(value);
};

const handleSortBySelect = (e, props) => {
    const value = e.target.value;

    if (value === 'amount') {
        props.sortByAmount();
    } else {
        props.sortByDate();
    }
};

const ExpenseListFilters = props => {
    return (
        <div>
            <input type="text" name="text" 
                value={props.filters.text}
                onChange={(e) => handleTextFilterInput(e, props)} 
            />
            <select value={props.filters.sortBy} onChange={(e) => handleSortBySelect(e, props)}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setTextFilter, sortByDate, sortByAmount }, dispatch);
    // return {
    //     setTextFilter: (value) => dispatch(setTextFilter(value))
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);