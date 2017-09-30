import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import PrivateApp from './PrivateApp';
import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import QuotePage from '../pages/QuotePage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="private" component={PrivateApp} >
      <IndexRoute component={JobPage} />
      <Route path="jobs" component={JobPage} />
      <Route path="quotes" component={QuotePage} />
    </Route>
  </Route>
);

export default routes;
