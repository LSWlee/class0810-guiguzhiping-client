/**
 * Created by lsw on 2018/12/7 0007.
 */
import {connect} from 'react-redux';

import Message from '../components/message';

export default connect(
  state => ({chatMessages:state.chatMessages})
) (Message)
