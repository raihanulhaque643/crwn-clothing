import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';

import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
