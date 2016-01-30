import './LBlocks.css';

import React, { PropTypes } from 'react';

import map from 'lodash/map';
import size from 'lodash/size';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import LBlock from 'components/LBlock';
import LBlockAddButton from 'components/LBlockAddButton';

const TRANSITION_TIMEOUT = 300;

const Placeholder = () => (
  <div className="LBlocks-placeholder">
    <span>There is no blocks to display</span>
  </div>
);

const LBlocks = ({ blocks, isEditMode, onAddBlock }) => {
  const renderSection = (block, index) => (
    <div className="LBlocks-section" key={block.uuid}>
      {isEditMode && index > 0 && index < size(blocks) &&
        <LBlockAddButton onClick={partial(onAddBlock, index)} />
        }
      <LBlock block={block} />
    </div>
  );

  return (
    <div className="LBlocks">
      {isEmpty(blocks)
        ?
          <Placeholder />
        :
          <ReactCSSTransitionGroup
            component="div"
            transitionName="animation"
            transitionEnterTimeout={TRANSITION_TIMEOUT}
            transitionLeaveTimeout={TRANSITION_TIMEOUT}
          >
            {map(blocks, renderSection)}
          </ReactCSSTransitionGroup>
      }
    </div>
  );
};

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

export default LBlocks;
