import { connect } from 'react-redux';

import { startActivity } from 'actions/activity';
import component from './component';

const actions = { startActivity };

const empty = {};
const selector = () => (empty);

export default connect(selector, actions)(component);
