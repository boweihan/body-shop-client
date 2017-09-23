import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './pages/Home';
import Job from './pages/Job';
import Estimate from './pages/Estimate';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="job" component={Job} />
    <Route path="estimate" component={Estimate} />
    <Route path="signup" component={SignUp} />
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
