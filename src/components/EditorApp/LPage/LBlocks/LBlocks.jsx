import React, { PropTypes, Component } from 'react';

import './LBlocks.css';

import map from 'lodash/map';
import bind from 'lodash/bind';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

import EmptyPlaceholder from './EmptyPlaceholder';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import shouldPureComponentUpdate from 'react-pure-render/function';

import LBlockSection from './LBlockSection';

class LBlocks extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const {
      blocks,
      onAddBlock,
    } = this.props;

    let previousBlockUuid = null;

    if (isEmpty(blocks)) {
      return (
        <div className="LBlocks">
          <EmptyPlaceholder
            onAddBlock={partial(onAddBlock, 0)}
            />
        </div>)
    }

    return (
      <div className="LBlocks">
          {map(blocks, (block, index) => {
            const uuid = previousBlockUuid
            previousBlockUuid = block.uuid
            return (<LBlockSection
              block={block}
              index={index}
              key={block.uuid}
              blocksLength={block.length}
              previousBlockUuid={uuid} />)
          })
        }
        </div>
    );
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  onAddBlock: PropTypes.func.isRequired,
};

export default LBlocks;
