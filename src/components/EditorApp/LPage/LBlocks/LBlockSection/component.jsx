import React, { PropTypes, Component } from 'react';

import LBlockAddButton from '../LBlockAddButton';
import LBlock from '../LBlock';

import partial from 'lodash/partial';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class LBlockSection extends Component {
  render() {
    const {
      block,
      previousBlockUuid,
      onAddBlock,
      currentBlockUuid,
      onCurrentBlock,
      blocksLength,
      index
    } = this.props;

    const isActive = false;

    const hasControlActivity = true;

    const showBeforeButton =
      (
        (hasControlActivity || isActive) &&
          (currentBlockUuid === block.uuid || previousBlockUuid === currentBlockUuid) &&
          (index > 0)
      );

    const BeforeAddButton = (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="animation"
        transitionEnterTimeout={TRANSITION_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_TIMEOUT}
      >
      {showBeforeButton &&
        <LBlockAddButton
          onClick={partial(onAddBlock, index)}
        />}
      </ReactCSSTransitionGroup>
    );

    const showAfterButton = true ||
      (blocksLength === 1 || hasControlActivity || isActive) &&
      (blocksLength > 0 && blocksLength - 1 === index);

    const AfterButtonPlaceholder = (blocksLength - 1 === index) ?
      (<div style={{ height: 30, backgroundColor: '#000' }} />) : null;

    const AfterAddButton =
      (showAfterButton) ?
        (
          <LBlockAddButton
            onClick={partial(onAddBlock, index + 1)}
          />
    ) : AfterButtonPlaceholder;

    console.log(hasControlActivity);
    // console.log('LBlockSection render', block);
    return (
      <div className="LBlocks-section">
        {BeforeAddButton}
        <LBlock block={block} onActive={partial(onCurrentBlock, block.uuid)}/>
        {AfterAddButton}
      </div>
    );
  };
}

LBlockSection.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  uuid: PropTypes.string,
}

export default LBlockSection;
