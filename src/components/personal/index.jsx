import React, {Component} from 'react';
import { Modal,List ,Result,Button,WhiteSpace} from 'antd-mobile';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    resetUserInfo:PropTypes.func.isRequired,
    resetUserList:PropTypes.func.isRequired
  }
  logout = () => {
      alert('退出登陆', '你确定要退出登陆吗', [
        { text: '取消', onPress: () => {

        }},
        { text: '确定', onPress: () => {
          //清除cookie
          Cookies.remove('userid');
          //清除redux中管理的数据
          this.props.resetUserList();
          this.props.resetUserInfo();
          this.props.history.replace('/login')
        } },
      ])

  }
  render () {
    const {header,username,post,info,company,salary} = this.props.user;
    const myImg = src => <img src={require(`../../assets/images/头像${+header+1}.png`)} />;
    return (
      <div>
        <Result
          img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
          title={username}
          message={<div>goode</div>}
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item>职位:{post}</Item>
          <Item>简介:{info}</Item>
          {salary !=='undefined' ? <Item>薪资:{salary}</Item> : null}
          {company !=='undefined' ? <Item>公司:{company}</Item> : null}
          <WhiteSpace/>
          <Button type="warning"
            onClick={this.logout}>
            退出登陆
          </Button>

          {/*<Item*/}
            {/*arrow="horizontal"*/}
            {/*thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"*/}
            {/*multipleLine*/}
            {/*onClick={() => {}}*/}
          {/*>*/}
            {/*Title <Brief>subtitle</Brief>*/}
          {/*</Item>*/}
        </List>
      </div>
    )
  }
}

export default Personal;