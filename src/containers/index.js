import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Table from './table';
import reducer from './reducer';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
  <Table/>
</Provider>,
document.getElementById('root')
);

// const rootElement = document.getElementById("root");
