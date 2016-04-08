import { connect } from 'react-redux';
import component from './component';
import size from 'lodash/size';

import { toggleMenu } from 'actions/application';

const actions = { toggleMenu };

const empty = {};
const selector = () => empty;

export default connect(selector, actions)(component);
