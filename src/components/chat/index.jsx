/*
 对话聊天的路由组件
 */

import React, {Component} from 'react'
import {NavBar, List, InputItem,Icon} from 'antd-mobile'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie';
const Item = List.Item


export default class Chat extends Component {
  static propTypes = {
    sendMessage:PropTypes.func.isRequired,
    chatMessages:PropTypes.object.isRequired
  }

  goback = () => {
    this.props.history.goBack();
};
  state = {
    message:''
  };

  sendMessage = () => {
    //获取发送消息的用户id
const from = Cookies.get('userid')
    //获取接受消息的用户id
const to = this.props.match.params.id;
    const {message} = this.state
    //发送消息
  this.props.sendMessage({message,from,to});
  };
  handleChange = val => {
    this.setState({
      message:val
    })
  };

  render() {
    const {users,chatMsgs} = this.props.chatMessages;
    //获取发送消息的用户id
    const from = Cookies.get('userid')
    //获取接受消息的用户id
    const to = this.props.match.params.id;

    const others = users[to]
    if(!others){
      return null
    }

    const from_to = [from,to].sort().join('-')

    const currMsgs = chatMsgs.filter((item,index) => item.from_to === from_to);
    currMsgs.sort(function (a,b) {
      return Date.parse(a.createTime) - Date.parse(b.createTime)
    })
    return (
      <div id='chat-page'>
        <NavBar icon={<Icon type="left" onClick={this.goback}/>}>{others.username}</NavBar>
        <List>
          {
            currMsgs.map((item,index) => {
              if(item.from === from){
                return(
                  <Item
                    key={index}
                    className='chat-me'
                    extra='我'
                  >
                    {item.message}
                  </Item>
                )
              }else{
              return  (
                <Item
                  thumb={require(`../../assets/images/头像${+others.header + 1}.png`)}
                >
                  {item.message}
                </Item>
              )
              }
            })
          }
        </List>

        <div className="chat">
          <div className='am-tab-bar'>
            <InputItem onChange={this.handleChange}
              placeholder="请输入"
              extra={
                <span onClick={this.sendMessage}>发送</span>
              }
            />
          </div>
        </div>
      </div>
    )
  }
}