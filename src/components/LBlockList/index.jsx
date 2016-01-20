import React, { Component, PropTypes } from 'react';

import get from 'lodash/get';
import map from 'lodash/map';
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

  onViewSwitchNext,
  onViewSwitchPrev
}) => {
  const renderBlock = (block) => {
    const props = {
      block: {
        ...block,
        data: get(data, block.uuid),
      },
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

export default LBlockList;
