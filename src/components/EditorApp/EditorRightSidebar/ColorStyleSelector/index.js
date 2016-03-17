import { connect } from 'react-redux';
import component from './component';

import { changeTheme } from 'actions/site';

const actions = { changeTheme };

const state = state => state.site;

export default connect(state, actions)(component);
