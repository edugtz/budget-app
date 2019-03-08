
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTextFilter } from '../redux/actions/filters';

const handleInput = (e, props) => {
    const value = e.target.value;
    props.setTextFilter(value);
};

const ExpenseListFilters = props => {
    return (
        <div>
            <input type="text" name="text" 
                value={props.filters.text}
                onChange={(e) => handleInput(e, props)} 
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setTextFilter }, dispatch);
    // return {
    //     setTextFilter: (value) => dispatch(setTextFilter(value))
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);