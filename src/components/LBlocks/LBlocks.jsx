import React, { PropTypes, Component } from 'react';

import './LBlocks.css';

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

class LBlocks extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAddButtonUuid: null };
  }
  render() {
    const { blocks, onAddBlock, hasControlActivity } = this.props;

    const onMouseLeave = () => {
      this.setState({ activeAddButtonUuid: null });
    };

    const onMouseEnter = (uuid) => {
      this.setState({ activeAddButtonUuid: uuid });
    };

    const renderSection = (block, index) => {
      const isActive = this.state.activeAddButtonUuid === block.uuid;

      return (
        <div className="LBlocks-section" key={block.uuid}>
          {(hasControlActivity || isActive) && index > 0 &&
            <LBlockAddButton
              onMouseLeave={onMouseLeave}
              onMouseEnter={partial(onMouseEnter, block.uuid)}
              onClick={partial(onAddBlock, index)}
            />}
            <LBlock block={block} />
          </div>
      );
    };

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
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  onAddBlock: PropTypes.func.isRequired,
  hasControlActivity: PropTypes.boolean.isRequired,
};

export default LBlocks;
