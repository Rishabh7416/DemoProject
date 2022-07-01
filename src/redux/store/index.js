import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware,  createStore,compose } from 'redux';
import rootReducer from '../index';

/**
 * returns {*} Store
 */
const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: () => __DEV__,
    }),
  ),
];

const enhancer = compose(...enhancers);
export const STORE = createStore(rootReducer, {}, enhancer);