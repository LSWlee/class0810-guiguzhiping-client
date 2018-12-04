/**
 * Created by lsw on 2018/12/4 0004.
 */
/*定义所有的请求函数*/

import ajax from './ajax';
//定义注册的请求
const prefix = 'http://localhost:4000';
export  const reqRegister = data => ajax(`${prefix}/register`,data,'POST');
