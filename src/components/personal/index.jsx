import React, {Component} from 'react';
import { Modal,List ,Result,Button,WhiteSpace} from 'antd-mobile';
import Cookies from 'js-cookie';
const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;
const myImg = src => <img src={require('../../assets/images/头像1.png')} />;
class Personal extends Component {
  logout = () => {
      alert('退出登陆', '你确定要退出登陆吗', [
        { text: '取消', onPress: () => {

        }},
        { text: '确定', onPress: () => {
          //清除cookie
          //清除redux中管理的数据
          Cookies.remove('userid');
          this.props.history.replace('/login')
        } },
      ])

  }
  render () {
    return (
      <div>
        <Result
          img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
          title="laoban001"
          message={<div>goode</div>}
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item>职位</Item>
          <Item>简介</Item>
          <Item>薪资</Item>
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