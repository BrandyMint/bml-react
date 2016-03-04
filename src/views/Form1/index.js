import { connect } from 'react-redux';
import component from './component';

const selector = state => state
export default connect(selector)(component);
