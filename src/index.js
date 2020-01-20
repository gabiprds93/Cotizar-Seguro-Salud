import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './index.css';
import store from './redux/store'
import App from './App';
import Home from './pages/Home'
import Steps from './pages/Steps'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pasos" component={Steps} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
