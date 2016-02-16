import { connect } from 'react-redux';

import { changeContent } from 'actions/blocks';

import LBlock from './LBlock';

const actions = {
  onContentChange: changeContent,
};

export default connect({}, actions)(LBlock);
