/**
 * Created by lsw on 2018/12/6 0006.
 */
import {connect} from 'react-redux';

import Personal from '../components/personal';
import {resetUserInfo,resetUserList} from '../redux/actions'
export default connect(
  //通过同步的action来清除数据
  state => ({user:state.user}),
{resetUserInfo,resetUserList}
) (Personal)