import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact key="homepage" path="/" component={HomePage} />,
    </Switch>
  </BrowserRouter >
);

export default Routes;
