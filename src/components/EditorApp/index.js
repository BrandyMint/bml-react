import { connect } from 'react-redux';
import component from './component';

const actions = { };

export default connect(state => state.application, actions)(component);
