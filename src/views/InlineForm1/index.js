import { connect } from 'react-redux';
import component from './component';

const selector = state => ({
  variantUuid: state.application.variantUuid,
});

export default connect(selector)(component);
