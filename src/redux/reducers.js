/*
  作用：根据之前的状态（previousState）和更新数据的行为（action）产生一个新的状态（newState）
 */
import {combineReducers} from 'redux';

import {AUTH_SUCCESS,
  AUTH_ERROR,
  UPDATE_USERINFO,
  RESET_USERINFO,
  UPDATE_USERLIST,
  RESET_USERLIST,
  GET_CHAT_MESSAGES,
  RESET_CHAT_MESSAGES,
  UPDATE_CHAT_MESSAGES
} from './action-types';

//初始化状态的值
const initUserState = {
  username: '',
  type: '',
  _id: '',
  errMsg: '',
  redirectTo: '',
  header: '',
  post: '',
  salary: '',
  info: '',
  company: ''
};

function user(previousState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {...action.data, redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case AUTH_ERROR :
      return {...initUserState, ...action.data};
    case UPDATE_USERINFO:
      return {...action.data, redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case RESET_USERINFO:
      return {...initUserState, ...action.data};
    default :
      return previousState;
  }
}

const initUserListState = [];
function userList(previousState = initUserListState, action) {
  switch (action.type) {
    case UPDATE_USERLIST:
      return action.data;
    case RESET_USERLIST:
      return [];
    default :
      return previousState;
  }
}

const initChatMessages = {
  users:{},
  chatMsgs:[]
};
function chatMessages(previousState = initChatMessages,action) {
  switch (action.type){
    case GET_CHAT_MESSAGES:
      return action.data;
    case RESET_CHAT_MESSAGES:
      return initChatMessages;
    case UPDATE_CHAT_MESSAGES:
      return {
        users:previousState.users,
        chatMsgs:[...previousState.chatMsgs,action.data]
      }
    default :
        return previousState;
  }
}

function getRedirectPath(type, header) {
  let path = '';
  
  if (type === 'laoban') {
    path = '/laoban';
  } else {
    path = '/dashen';
  }
  
  if (!header) {
    path += 'info';
  }
  
  return path;
}

//默认暴露合并后的reducers函数
// {xxx: function xxx() {}, yyy: function yyy() {}}
export default combineReducers({
  user,
  userList,
  chatMessages
})