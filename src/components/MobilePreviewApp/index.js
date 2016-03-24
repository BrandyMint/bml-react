import { connect } from 'react-redux';
import component from './component';

const selector = state => state.application;
export default connect(selector)(component);
