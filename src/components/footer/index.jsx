import React, {Component} from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import './index.less';
class Footer extends Component {
  static propTypes = {
    NavList:PropTypes.array.isRequired
  }
  redirectTo = path => {
    this.props.history.push(path)
  }
  render () {
    const Item = TabBar.Item;
    //过滤到老板或者大神，type通过redux来获取
    const type = 'laoban';
    const filter = type === 'laoban' ? '/dashen' : '/laoban';
    const currNavList = this.props.NavList.filter(item => {
      if(filter === item.path){
        return false
      }else{
        return true
      }
    });
    return (
      <div className="footer">
        <TabBar>
          {
            currNavList.map((item,index) => <Item
              key={index}
              title={item.text}
              icon={<img className="img-foot" src={require(`./imge/${item.icon}.png`)} alt={item.text}/>}
              onPress={this.redirectTo.bind(null,item.path)}
              selected={this.props.location.pathname===item.path}
              selectedIcon={<img className="img-foot" src={require(`./imge/${item.icon}-selected.png`)} alt={item.text}/>}>
            </Item>)
          }
        </TabBar>
      </div>
    )
  }
}

export default withRouter(Footer);