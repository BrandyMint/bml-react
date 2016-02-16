import './LBlocks.css';

import React, { PropTypes } from 'react';

import map from 'lodash/map';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

import LBlock from 'components/LBlock';
import LBlockAddButton from 'components/LBlockAddButton';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';

const Placeholder = () => (
  <div className="LBlocks-placeholder">
    <span>There is no blocks to display</span>
  </div>
);

const LBlocks = ({ blocks, onAddBlock, hasControlActivity }) => {
  const renderSection = (block, index) => (
    <div className="LBlocks-section" key={block.uuid}>
      {hasControlActivity && index > 0 &&
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
};

export default LBlocks;
