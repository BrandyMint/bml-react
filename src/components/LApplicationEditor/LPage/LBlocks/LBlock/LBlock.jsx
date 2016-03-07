import React, { Component, PropTypes } from 'react';

import './index.css';

import partial from 'lodash/partial';

import LBlockLayer from './LBlockLayer';

import ViewComponent from 'components/shared/ViewComponent';

class LBlock extends Component {
  getChildContext() {
    const { block, onContentChange } = this.props;

    return {
      isEditMode: true,
      onContentChange: partial(onContentChange, block.uuid),
    };
  }
  render() {
    const { block, onActive } = this.props;

    return (
      <LBlockLayer block={block} onActive={onActive}>
        <ViewComponent block={block} />
      </LBlockLayer>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  onContentChange: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  onContentChange: PropTypes.func,
  isEditMode: PropTypes.bool.isRequired,
};

export default LBlock;
