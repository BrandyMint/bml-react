import { connect } from 'react-redux';
import component from './component';

const selector = ({ application }) => ({ hasUnsavedChanges: application.hasUnsavedChanges });

export default connect(selector)(component);
