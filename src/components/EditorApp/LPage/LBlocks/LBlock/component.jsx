import React, { Component, PropTypes } from 'react';
import partial from 'lodash/partial';
import BlockSettingsPanel from './BlockSettingsPanel';

import ViewComponent from 'components/shared/ViewComponent';

import './index.css';

class LBlock extends Component {
  getChildContext() {
    const { block, onContentChange } = this.props;

    return {
      onContentChange: partial(onContentChange, block.uuid),
    };
  }

  render() {
    const { block } = this.props;

    return (
      <div className="LBlock">
        <BlockSettingsPanel block={block} />
        <ViewComponent block={block} />
      </div>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  onContentChange: PropTypes.func,
};

export default LBlock;
