//  import { createStore, applyMiddleware, compose } from 'redux';
// // import createSagaMiddleware from 'redux-saga';
export {}
// // //import rootSaga from './rootSaga';
// import rootReducer from '../reducers';
// import { StoreConfig } from './storeType';


// declare global {
//    interface Window {
//      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//    }
//  }

// // const sagaMiddleware = createSagaMiddleware();
//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // // redux sagas is a middleware that we apply to the store
//  export const configStore = (): StoreConfig => {
//   const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(sagaMiddleware)));
// //   sagaMiddleware.run(rootSaga);
//    return { store };
// // };
