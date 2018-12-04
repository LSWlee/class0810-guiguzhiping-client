/**
 * Created by lsw on 2018/12/4 0004.
 */
//定义发送请求模块
import axios from 'axios';
export default async function (url ,method = 'GET', data ) {
  //处理请求参数
  /*{
      username:
      password:
  }

  ?username=value&password=value&
  */
  let qs = '';
  if(data){
    const arr = Object.keys(data);
    arr.forEach(item => {
      qs += `${arr}=${data[arr]}&`;
    })
  }
  qs = qs.substring(0,qs.length - 1);
  let type = method.toUpperCase();
  if(type === 'GET'){
   const result = await axios.get(url + '?' + qs);
   //返回成功的响应
   return result.data;
  }else if(type === 'POST'){
    const result = await axios.get(url, qs ,{
        'content-type': 'application/x-www-form-urlencoded'
      });
    return result.data;
  }

}