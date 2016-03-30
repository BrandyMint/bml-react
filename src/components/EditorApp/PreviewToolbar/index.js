import { connect } from 'react-redux';
import component from './component';
import size from 'lodash/size';

const selector = (state) => ({
  open: state.application.zoom,
  enable: size(state.blocks) > 0,
});

export default connect(selector)(component);
