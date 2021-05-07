import React from 'react';
import {BrowserRouter, BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import About from '../Component/Pages/About';
import Contact from '../Component/Pages/Contact';
import Home from '../Component/Pages/Home';
import PageNotFound from '../Component/Pages/PageNotFound';
import Nabvar from '../Layout/Nabvar';
import AddUser from '../Users/AddUser';
import EditUser from '../Users/EditUser';
import UserView from '../Users/UserView';

const Routes = ()=> {
    return(
        <div>
            <BrowserRouter>
            <Nabvar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/users/add" component={AddUser} /> 
                <Route exact path="/users/edit/:id" component={EditUser} />
                <Route exact path="/users/:id" component={UserView} />
                <Route component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;