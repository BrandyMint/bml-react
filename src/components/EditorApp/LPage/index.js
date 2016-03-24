import { connect } from 'react-redux';

import component from './component';

const selector = ({ site, application }) => ({ isBoxed: site.isBoxed, zoom: application.zoom });

export default connect(selector)(component);
