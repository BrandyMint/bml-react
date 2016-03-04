import { connect } from 'react-redux';
import component from './component.jsx';

const selector = state => state;
export default connect(selector)(component);
