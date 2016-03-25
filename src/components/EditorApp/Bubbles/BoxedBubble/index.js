import { connect } from 'react-redux';
import component from './component';

import { toggleBoxedLayout } from 'actions/site';

const actions = { toggleBoxedLayout };

const selector = ({ site }) => ({ is_boxed: site.is_boxed });

export default connect(selector, actions)(component);
