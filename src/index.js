import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { cyan500 } from 'material-ui/styles/colors';
// If your server supports server rendering, use browserHistory replace with hashHistory.
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './app/store';
import registerServiceWorker from './app/registerServiceWorker';
import routes from './app/routes';
import './styles/main.css';

const state = window.__initialState__ || undefined; // eslint-disable-line
const store = configureStore(hashHistory, state);
const history = syncHistoryWithStore(hashHistory, store);

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: cyan500,
//   },
//   appBar: {
//     height: 50,
//   },
// });

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);
registerServiceWorker();
