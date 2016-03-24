import { connect } from 'react-redux';
import component from './component.jsx';
import './index.css';

const selector = state => state.application;

export default connect(selector)(component);
