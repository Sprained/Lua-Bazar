import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/login' component={Register} />
            </Switch>
        </Router>
    )
}