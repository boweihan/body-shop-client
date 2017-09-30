import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import QuotePage from '../pages/QuotePage';
import ControlPanelPage from '../pages/ControlPanelPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="cpanel" component={ControlPanelPage} />
    <Route path="jobs" component={JobPage} />
    <Route path="quotes" component={QuotePage} />
  </Route>
);

export default routes;
