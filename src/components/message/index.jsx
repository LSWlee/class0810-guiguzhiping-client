import React, {Component} from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  render () {
    return (
      <List className="my-list">
        <Item arrow="horizontal" thumb={require('../../assets/images/头像1.png')} multipleLine>
        今天天气<Brief>subtitle</Brief>
        </Item>
      </List>
    )
  }
}

export default Message;