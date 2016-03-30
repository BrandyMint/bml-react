import { connect } from 'react-redux';
import component from './component';
import size from 'lodash/size';

import { toggleBoxedLayout } from 'actions/site';

const actions = { toggleBoxedLayout };

const selector = (state) => ({
  is_boxed: state.site.is_boxed,
  enable: size(state.blocks) > 0,
});

export default connect(selector, actions)(component);
