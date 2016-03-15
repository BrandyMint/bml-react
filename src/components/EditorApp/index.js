import { connect } from 'react-redux';
import EditorApp from './component';

import { appActivity } from 'actions/application';

const actions = { };

export default connect(state => state.application, actions)(EditorApp);
