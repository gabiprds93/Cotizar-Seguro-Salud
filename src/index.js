import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import store from './redux/store'
import App from './App';
import Home from './pages/Home'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, 
  document.getElementById('root')
);
