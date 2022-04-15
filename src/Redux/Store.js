import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import companiesReducer from './companiesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(companiesReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
