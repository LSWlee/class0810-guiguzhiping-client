import React,{Component} from 'react';
import logo from './logo.png';
import './index.less';

class Logo extends Component{
  render () {
    return (
      <img src={logo} alt="logo"/>
    )
  }
}
export default Logo;
