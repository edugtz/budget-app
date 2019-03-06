import { createStore } from 'redux';

const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementBy = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 101 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({ count = 0 } = {}) => ({
    type: 'RESET',
    count
});

const countReducer = (state = { count: 0 }, action) => {
    const { type, incrementBy, decrementBy, count } = action;

    switch (type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count
            }
        case 'RESET':
            return {
                count
            }
    
        default:
            return state;
    }

};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementBy());

store.dispatch(setCount());