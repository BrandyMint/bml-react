import React, { Component, PropTypes } from 'react';
import partial from 'lodash/partial';

import LBlockLayer from './LBlockLayer';
import ViewComponent from 'components/shared/ViewComponent';

import './index.css';


// TODO Можно отказаться в мользу LBlockLayer
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
      <LBlockLayer block={block} >
        <ViewComponent block={block} />
      </LBlockLayer>
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
