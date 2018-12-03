/**
 * Created by lsw on 2018/12/3 0003.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter,Switch,Route} from 'react-router-dom';
import store from './containers/store';
import Login from './components/loging';
import Register from './components/register';
import Main from './components/main'
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
),document.getElementById('main'));

