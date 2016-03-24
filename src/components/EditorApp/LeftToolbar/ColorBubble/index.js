import { connect } from 'react-redux';
import component from './component';

import { changeTheme } from 'actions/site';

const actions = { changeTheme };

const selector = state => state.site;

export default connect(selector, actions)(component);
