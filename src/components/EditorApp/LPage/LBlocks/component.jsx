import React, { PropTypes, Component } from 'react';

import map from 'lodash/map';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';

import EmptyPlaceholder from './EmptyPlaceholder';
import LBlockSection from './LBlockSection';

import Animated from 'components/primitives/Animated';

import './index.css';

class LBlocks extends Component {
  render() {
    const { blocks, onAddBlock } = this.props;

    if (isEmpty(blocks)) {
      return (
        <div className="LBlocks">
          <EmptyPlaceholder
            onAddBlock={partial(onAddBlock, 0)}
          />
        </div>);
    }

    return (
      <div className="LBlocks">
      <Animated >
        {map(blocks, (block, index) =>
           <LBlockSection block={block} index={index} key={block.uuid} />
        )}
      </Animated>
      </div>
    );
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  onAddBlock: PropTypes.func.isRequired,
};

export default LBlocks;
