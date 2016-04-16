import { connect } from 'react-redux';
import component from './component';
import size from 'lodash/size';
import { startAddingBlock } from 'actions/blocks';

const selector = (state) => ({
  open: state.application.zoom,
  enable: (!state.application.isMenuOpen && !state.application.editable && !state.modal.current && size(state.blocks) > 0),
});

const actions = {
  startAddingBlock: startAddingBlock,
};

export default connect(selector, actions)(component);
