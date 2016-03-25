import { connect } from 'react-redux';

import component from './component';

const selector = ({ site, application }) => ({ is_boxed: site.is_boxed, zoom: application.zoom });

export default connect(selector)(component);
