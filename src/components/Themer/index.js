import { connect } from 'react-redux';
import component from './component';

const actions = { };

const selector = state => state.site;

export default connect(selector, actions)(component);
