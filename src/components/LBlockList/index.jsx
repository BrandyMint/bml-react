import React, { Component, PropTypes } from 'react';

import get from 'lodash/get';
import map from 'lodash/map';
import noop from 'lodash/noop';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

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

  onViewSwitchNext,
  onViewSwitchPrev
}) => {
  const renderBlock = (block) => {
    const props = {
      block: {
        ...block,
        data: get(data, block.uuid),
      },
      isEditMode: isEditMode,
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
  onViewSwitchNext: PropTypes.func,
  onViewSwitchPrev: PropTypes.func,
};

LBlockList.defaultProps = {
  onViewSwitchPrev: noop,
  onViewSwitchNext: noop,
};

export default LBlockList;