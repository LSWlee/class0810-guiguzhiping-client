import React, {Component} from 'react';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  static propTypes = {
    chatMessages:PropTypes.object.isRequired
  };
  goChat = id => {
    this.props.history.push(`/chat/${id}`)
  }

  render () {
    //获取当前用户userid
    const userid = Cookies.get('userid');
    //从消息列表中找出所有童话的用户
    const {users,chatMsgs} = this.props.chatMessages;
    console.log(users,chatMsgs);
    //从每一个chatMsgs中找到from to与userid不同的id
    //过滤相同的id，相同的id只保留一个
    let user_id = {};
    chatMsgs.forEach(item => {
      const othersId = item.from === userid ? item.to : item.from
      user_id[othersId] = users[othersId];
      user_id[othersId].id = othersId;
      const time = Date.parse(item.createTime)
      if(user_id[othersId].time){
          if(user_id[othersId].time < time){
            user_id[othersId].time = time
            user_id[othersId].message = item.message
          }
      }else{
        user_id[othersId].time = time
        user_id[othersId].message = item.message

      }
      user_id[othersId].message = item.message
    });
    //将对象变成数组,将对象的值提取成一个数组
    const arr = Object.values(user_id);//[{header,username,id}]

    console.log(arr);
    return (
      <List className="my-list">
        {
          arr.map((item,index) => (
            <Item
              key={index}
              onClick={this.goChat.bind(null,item.id)}
              arrow="horizontal"
              thumb={require(`../../assets/images/头像${(item.header === 'undefined' ? 0 :+item.heade ) + 1}.png`)} multipleLine>
              {item.message}<Brief>{item.username}</Brief>
          </Item>))
        }

      </List>
    )
  }
}

export default Message;