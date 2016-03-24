import component from './component';
import { connect } from 'react-redux';

const selector = ({ application }) => ({ enable: !application.zoom });

export default connect(selector)(component);
