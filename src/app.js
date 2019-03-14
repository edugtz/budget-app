import ReactDOM from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'; // Note this
import './styles/styles.scss';
import store from './redux/store';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import getVisibleExpenses from './utils/utils';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 5000, createdAt: 0 }));

// store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
); 

ReactDOM.render(jsx, document.getElementById('app'));