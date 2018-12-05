import {connect} from 'react-redux';
import LaobanInfo from '../components/laoban-info';
import {update} from '../redux/actions';
export default connect (
  state => ({user:state.user}),
 {update}
) (LaobanInfo)