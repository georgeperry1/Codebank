'use strict';

import App from './Containers/App';
import { apiService } from './Middleware/apiService';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
// import promise from 'redux-promise-middleware';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './Reducers/RootReducer';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(logger, thunk, apiService);
const store = createStore(rootReducer, composeWithDevTools(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
