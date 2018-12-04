import React ,{Component} from 'react';
import {NavBar, List,InputItem,WingBlank,WhiteSpace,Radio,Button} from 'antd-mobile';
import Logo from '../logo'
import {reqRegister} from '../../api';
const Item = List.Item;

class Register extends Component{
  state = {
    laoban:true,
    username:'',
    passward:'',
    passwardagain:''
  };

  collectDate = (type,value) => {
      this.setState({
        [type]:value
      })
  };
  tologin = () => {
    this.props.history.replace('/login');
  };
  sendDate =async () => {
    const {laoban,username,passward,passwardagain} = this.state;
    //发送请求
    console.log(laoban,username,passward,passwardagain);
    const user = await reqRegister({username ,passward,type:laoban ? 'laoban':'dashen'})
  }
  render () {
    const {laoban} = this.state;
    return (
      <div className="logo">
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem onChange={val => this.collectDate('username',val)}>用户名</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.collectDate('passward',val)}>密 &nbsp;&nbsp;码</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.collectDate('passwardagain',val)}>确认密码</InputItem>
            <WhiteSpace />
            <Item>
              用户类型 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!laoban} onChange={this.collectDate.bind(null,'laoban',false)}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={laoban} onChange={this.collectDate.bind(null,'laoban',true)}>老板</Radio>
            </Item>
            <Button type="primary" onClick={this.sendDate}>注册</Button>
            <Button onClick={this.tologin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default Register;