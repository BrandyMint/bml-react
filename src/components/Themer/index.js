import { connect } from 'react-redux';
import component from './component';

const actions = { };

const state = state => state.site;

export default connect(state, actions)(component);
