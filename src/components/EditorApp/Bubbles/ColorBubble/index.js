import { connect } from 'react-redux';
import component from './component';
import size from 'lodash/size';

import { changeTheme } from 'actions/site';

const actions = { changeTheme };

const selector = state => ({
  theme_name: state.site.theme_name,
  enable: size(state.blocks) > 0,
});

export default connect(selector, actions)(component);
