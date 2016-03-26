import { connect } from 'react-redux';
import component from './component';

const selector = ({ modal }) => ({ hide: !!modal.current });

export default connect(selector)(component);
