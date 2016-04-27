import 'babel-polyfill';

import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './app/redux';
import routes from './routes';
import {fetchOptions} from './app/redux/actions/home';

import './styles/index.scss';

const store = configureStore();
store.dispatch(fetchOptions());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
