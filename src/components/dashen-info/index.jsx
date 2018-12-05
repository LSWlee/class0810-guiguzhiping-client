import React, {Component} from 'react';
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderSelector from '../header-selector';

class DashenInfo extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    update:PropTypes.func.isRequired
  };
  state = {
    header: '',
    post: '',
    info: ''
  }
  
  //在父组件定义更新状态方法
  setHeader = header => {
    this.setState({
      header
    })
  }
  
  handleChange = (type, val) => {
    this.setState({
      [type]: val
    })
  }
  updateUserInfo = () => {
    this.props.update(this.state)
  }
  render () {
    const {errMsg,redirectTo} = this.props.user;
    if(redirectTo === '/dashen'){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <p>{errMsg}</p>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem onChange={val => {this.handleChange('post', val)}}>求职岗位:</InputItem>
        <TextareaItem title="个人简介:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='primary' onClick={this.updateUserInfo}>保存</Button>
      </div>
    )
  }
}

export default DashenInfo;