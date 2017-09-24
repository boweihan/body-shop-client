import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './pages/Home';
import Job from './pages/Job';
import Estimate from './pages/Estimate';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="job" component={Job} />
    <Route path="estimate" component={Estimate} />
  </Route>
);

export default routes;
