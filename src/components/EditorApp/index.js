import { connect } from 'react-redux';
import EditorApp from './component';

const actions = { };

export default connect(state => state.application, actions)(EditorApp);
