import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboard} />
                <Route path="/create" component={CreateExpense} />
                <Route path={"/edit/:id?"} component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;