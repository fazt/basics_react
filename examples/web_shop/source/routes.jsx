import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import Layout from './Layout.jsx';

// components for pages
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";
import Item from "./pages/Item.jsx";
import Checkout from "./pages/Checkout.jsx";
import Receipt from "./pages/Receipt.jsx";


const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="company" component={Company}/>
      <Route path="products" component={Products}/>
      <Route path="item" component={Item}/>
      <Route path="checkout" component={Checkout}/>
      <Route path="receipt" component={Receipt}/>
    </Route>
  </Router>
);

module.exports = Routes;
