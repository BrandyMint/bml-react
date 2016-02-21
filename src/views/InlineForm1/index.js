import { connect } from 'react-redux';
import component from './component';

const selector = state => ({
  landingVersionUuid: state.application.landingVersionUuid,
});

export default connect(selector)(component);
