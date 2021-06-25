import React from 'react';
import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Table from './containers/table';
import reducer from '././containers/reducer'; 
import saga from './containers/saga';

let composeEnhancers = compose;
const reduxSagaMonitorOptions = {};
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(
reducer,
composeEnhancers(...enhancers),
);
store.runSaga = sagaMiddleware.run(saga);


// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );


ReactDOM.render(
  <Provider store={store}>
  <Table/>
</Provider>,
document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
