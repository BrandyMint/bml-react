import { connect } from 'react-redux';
import component from './MobilePreviewApp';

const selector = state => state.application;
export default connect(selector)(component);
