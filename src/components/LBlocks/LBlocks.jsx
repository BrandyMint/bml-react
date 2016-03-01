import React, { PropTypes, Component } from 'react';

import './LBlocks.css';

import map from 'lodash/map';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

import LBlock from 'components/LBlock';
import LBlockAddButton from 'components/LBlockAddButton';
import EmptyPlaceholder from 'components/LBlocks/EmptyPlaceholder';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';


class LBlocks extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAddButtonUuid: null };
  }
  render() {
    const {
      blocks,
      currentBlockUuid,
      onAddBlock,
      onCurrentBlock,
      hasControlActivity,
    } = this.props;

    const onMouseLeave = () => {
      this.setState({ activeAddButtonUuid: null });
    };

    const onMouseEnter = (uuid) => {
      this.setState({ activeAddButtonUuid: uuid });
      onCurrentBlock(uuid);
    };

    let previousBlockUuid = null;

    const renderSection = (block, index) => {
      const isActive = this.state.activeAddButtonUuid === block.uuid;

      const showBeforeButton =
        (blocks.length === 0) ||
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
            onMouseLeave={onMouseLeave}
            onMouseEnter={partial(onMouseEnter, block.uuid)}
            onClick={partial(onAddBlock, index)}
          />}
        </ReactCSSTransitionGroup>
      );

      const showAfterButton =
        (blocks.length == 1 || hasControlActivity || isActive) &&
        (blocks.length > 0 && blocks.length - 1 === index);

      const AfterButtonPlaceholder = (blocks.length -1 === index ) ? (<div style={{height: 30, backgroundColor: '#000'}} />) : null;
      const AfterAddButton =
        (showAfterButton) ?
          (
            <LBlockAddButton
              onMouseLeave={onMouseLeave}
              onMouseEnter={partial(onMouseEnter, block.uuid)}
              onClick={partial(onAddBlock, index + 1)}
            />
      ) : AfterButtonPlaceholder;

      const result = (
        <div className="LBlocks-section" key={index}>
          {BeforeAddButton}
          <LBlock block={block} onActive={partial(onCurrentBlock, block.uuid)}/>
          {AfterAddButton}
        </div>
      );

      previousBlockUuid = block.uuid;
      return result;
    };

    return (
      <div className="LBlocks">
        {isEmpty(blocks)
          ?
            <EmptyPlaceholder
              onAddBlock={partial(onAddBlock, 0)}
            />
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
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  onAddBlock: PropTypes.func.isRequired,
  onCurrentBlock: PropTypes.func.isRequired,
  hasControlActivity: PropTypes.bool.isRequired,
  currentBlockUuid: PropTypes.string,
};

export default LBlocks;
