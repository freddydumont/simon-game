import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sequenceAction from 'redux-sequence-action';
import App from './containers/App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, sequenceAction]
let store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();