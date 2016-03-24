import { connect } from 'react-redux';
import component from './component';

const selector = state => ({
  variantUuid: state.application.variantUuid,
  tracker: state.tracker,
});

export default connect(selector)(component);
