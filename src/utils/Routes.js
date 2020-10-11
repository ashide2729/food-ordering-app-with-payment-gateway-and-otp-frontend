import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaymentsPage from '../Pages/PaymentsPage/PaymentsPage';
import OTPpage from '../Pages/OTPpage/OTPpage';
import RecipeCardsPage from '../Pages/RecipeCardsPage/RecipeCardsPage';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={RecipeCardsPage} />
        <Route exact path='/payment/:id' component={PaymentsPage} />
        <Route exact path='/otp' component={OTPpage} />
    </Switch>
);
export default Routes;
