import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Homepage from './pages/homepage';
import Cart from './components/cart/carts';
import ProductList from './components/productlist';
import Details from './components/details';
import Default from './components/default';
import Modal from './components/modal';

export const Routers =() => 
    <BrowserRouter>

    
        <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/homepage' component={ Homepage } />
        <Route exact path='/details' component={ Details } />
        <Route exact path='/store' component={ Cart } />
        <Route exact path='/productlist' component={ ProductList } />
        <Route exact component={ Default } />
        </Switch>
        <Modal />
    </BrowserRouter>