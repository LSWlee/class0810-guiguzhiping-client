import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Message from '../../containers/message';
import Personal from '../../containers/personal';
import Footer from '../footer';
import Chat from '../../containers/chat';
import {NavBar,Icon} from 'antd-mobile';
class Main extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired,
    getChatList:PropTypes.func.isRequired,
    // chatMessages:PropTypes.object.isRequired
  };
  NavList = [
    {path:"/laoban",titel:'大神列表',icon:'laoban',text:'大神'},
    {path:"/dashen",titel:'老板列表',icon:'dashen',text:'老板'},
    {path:"/message",titel:'消息列表',icon:'message',text:'消息'},
    {path:"/personal",titel:'个人中心',icon:'personal',text:'个人'},
  ];
  //在访问message组件之前就需要亲求历史消息保存在redux中
  componentDidMount () {
    //请求所有关于当前用户的所有消息
  this.props.getChatList()
  }
  render () {
    //1判断有没有cookie，没有直接取登陆界面
    const userid  =Cookies.get('userid');
    if(!userid){
      return <Redirect to="/login"/>
    }
    //2.如果有cookie，redux中有没有状态（用户登陆过，刷新了页面），必须将数据请求回来

    if(!this.props.user._id){
      this.props.getUserInfo();
      //当状态数据未加载完不让加载后面的组件
      return  <Icon className="loading" type="loading" size="lg"/>
    }
    //3.如果访问/让他去老板/大神/信息完善页面
    //获取路由路径
    const {pathname} = this.props.location;
    if(pathname === '/'){

     return <Redirect to={this.props.user.redirectTo}/>
    }


    const currNav = this.NavList.find(item => (item.path === pathname));

    return (
      <div>
        {currNav ? <NavBar className="nav-bar">{currNav.titel}</NavBar> : null}
        <div className="main-content">
          <Route path="/laobaninfo" component={LaobanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/chat/:id" component={Chat}/>
        </div>
        {currNav ? <Footer NavList={this.NavList} type={this.props.user.type}/> : null}
      </div>
    )
  }
}

export default Main;