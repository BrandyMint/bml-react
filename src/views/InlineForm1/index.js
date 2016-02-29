import { connect } from 'react-redux';
import component from './component';

const selector = state => ({
  landingVariantUuid: state.application.landingVariantUuid,
});

export default connect(selector)(component);
