import { connect } from 'react-redux';
import component from './component';

import { toggleBoxedLayout } from 'actions/site';

const actions = { toggleBoxedLayout };

const selector = state => state.site;

export default connect(selector, actions)(component);
