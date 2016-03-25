import { connect } from 'react-redux';
import component from './component';

const selector = ({ site }) => ({ public_url: site.public_url });

export default connect(selector)(component);
