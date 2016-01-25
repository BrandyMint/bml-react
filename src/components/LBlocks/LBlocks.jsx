import React, { PropTypes } from 'react';

import map from 'lodash/map';
import size from 'lodash/size';
import isEmpty from 'lodash/isEmpty';

import LBlock from 'components/LBlock';
import LBlockAddButton from 'components/LBlockAddButton';

const Placeholder = () => (
  <div className="LBlocks-placeholder">
    <span>There is no blocks to display</span>
  </div>
);

const LBlocks = ({ blocks, isEditMode, onAddBlock }) => {
  const renderSection = (block, index) => {
    const blockItem = <LBlock block={block} key={block.uuid} />;
    const buttonItem = (
      <LBlockAddButton
        key={`${block.uuid}-addButton`}
        onClick={() => onAddBlock(index)}
      />
    );

    return isEditMode && index > 0 && index < size(blocks)
      ? [buttonItem, blockItem]
      : blockItem;
  };

  return (
    <div className="LBlocks">
      {isEmpty(blocks)
        ? <Placeholder />
        : map(blocks, renderSection)
      }
    </div>
  );
};

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

export default LBlocks;