import component from './component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { editableEnableSelector } from 'selectors';

const selector = createStructuredSelector({
  enable: editableEnableSelector,
});

export default connect(selector)(component);
