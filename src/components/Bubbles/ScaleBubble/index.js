import { connect } from 'react-redux';
import component from './component';

import { changeZoom } from 'actions/application';

const actions = { changeZoom };

const selector = ({ application }) => ({ zoom: application.zoom });

export default connect(selector, actions)(component);
