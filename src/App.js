
import React, { Component, Fragment, useEffect, useState } from 'react';
import './css/App.css';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import HomePage from './container/Home/HomePage';
import ShopPage from './container/Shop/ShopPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Header />
            <HomePage />
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <ShopPage />
            <Footer />
          </Route>

        </div>
      </Switch>
    </Router>

  );
}

export default App;
