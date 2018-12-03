/**
 * Created by lsw on 2018/12/3 0003.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers';
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));