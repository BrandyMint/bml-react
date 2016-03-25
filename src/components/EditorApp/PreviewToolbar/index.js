import { connect } from 'react-redux';
import component from './component';

const selector = ({ application }) => ({
  open: application.zoom,
});

export default connect(selector)(component);
