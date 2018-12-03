import React ,{Component} from 'react';
import {NavBar, List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile';
import Logo from '../logo'
class Login extends Component{
  state = {
    username:'',
    passward:''
  };

  collectDate = (type,value) => {
    this.setState({
      [type]:value
    })
  };
  toregister = () => {
    this.props.history.replace('/register');
  };
  sendDate = () => {
    const {username,passward} = this.state;
    //发送请求
    console.log(username,passward);
  }
  render () {
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
            <Button type="primary" onClick={this.sendDate}>登陆</Button>
            <WhiteSpace />
            <Button onClick={this.toregister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default Login;