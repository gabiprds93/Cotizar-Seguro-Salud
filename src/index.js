import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch, HashRouter } from 'react-router-dom'

import './index.css';
import store from './redux/store'
import App from './App';
import Home from './pages/Home'
import Steps from './pages/Steps'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pasos" component={Steps} />
      </Switch>
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
);
