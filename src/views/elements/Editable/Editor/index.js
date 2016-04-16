import component from './component';
import { connect } from 'react-redux';
import { changeEditable } from 'actions/application';

const selector = () => ({});

const actions = { changeEditable };

export default connect(selector, actions)(component);
