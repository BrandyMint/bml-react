import { connect } from 'react-redux';

import component from './component';

const selector = ({ site }) => ({ isBoxed: site.isBoxed });

export default connect(selector)(component);
