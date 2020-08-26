import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import counterReducer from './redux/reducer'

import { Provider } from 'react-redux'

let store = createStore(counterReducer)
//our components will never access the store directly (by for example literally exporting it and importing it into another file), they'll use CONNECT to access this very same store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App anotherProp="somethingElse"/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//PWA
