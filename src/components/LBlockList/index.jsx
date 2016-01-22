import React, { Component, PropTypes } from 'react';

import get from 'lodash/get';
import map from 'lodash/map';
import size from 'lodash/size';
import noop from 'lodash/noop';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

import VIEWS from 'constants/views';

import LBlock from 'components/LBlock';
import LBlockAddButton from 'components/LBlockAddButton';

const Placeholder = () => (
  <div className="LBlockList-placeholder">
    <span>There is no blocks to display</span>
  </div>
);

const LBlockList = ({
  blocks,
  data,
  isEditMode,

  onBlockPositionDown,
  onBlockPositionUp,
  onViewSwitchNext,
  onViewSwitchPrev
}) => {
  const renderBlock = (block) => {
    const props = {
      block: {
        ...block,
        data: get(data, block.uuid),
      },
      hasMultipleViews: size(VIEWS[block.type]) > 1,
      hasMultipleBlocks: size(blocks) > 1,
      isEditMode: isEditMode,
      onBlockPositionDown: partial(onBlockPositionDown, block.uuid),
      onBlockPositionUp: partial(onBlockPositionUp, block.uuid),
      onViewSwitchNext: partial(onViewSwitchNext, block.uuid),
      onViewSwitchPrev: partial(onViewSwitchPrev, block.uuid),
      key: block.uuid,
    };

    return <LBlock {...props} />;
  };

  return (
    <div className="LBlockList">
      {isEmpty(blocks)
        ? <Placeholder />
        : map(blocks, renderBlock)
      }
    </div>
  );
}

LBlockList.propTypes = {
  blocks: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool,
  onBlockPositionDown: PropTypes.func,
  onBlockPositionUp: PropTypes.func,
  onViewSwitchNext: PropTypes.func,
  onViewSwitchPrev: PropTypes.func,
};

LBlockList.defaultProps = {
  onBlockPositionDown: noop,
  onBlockPositionUp: noop,
  onViewSwitchPrev: noop,
  onViewSwitchNext: noop,
};

export default LBlockList;