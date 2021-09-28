import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
export {};
import { rootsaga } from '../saga/saga';
import rootReducer from '../reducers';
//import { StoreConfig } from './storeType';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // // redux sagas is a middleware that we apply to the store
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configStore = () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootsaga);
  return { store };
};
