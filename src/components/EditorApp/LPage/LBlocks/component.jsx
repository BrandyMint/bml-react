import React, { PropTypes, Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { DragSource, DropTarget } from 'react-dnd';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import DropTypes from 'constants/DropTypes';

import EmptyPlaceholder from './EmptyPlaceholder';
import LBlockSection from './LBlockSection';

import Animated from 'components/primitives/Animated';

const blocksTarget = {
  drop() {
  }
};

@DragDropContext(HTML5Backend)
@DropTarget(DropTypes.BLOCK, blocksTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
class LBlocks extends Component {
  render() {
    const { blocks } = this.props;
    const { connectDropTarget } = this.props;

    if (isEmpty(blocks)) {
      return (<EmptyPlaceholder />);
    }

    return connectDropTarget(
      <div>
        <Animated>
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
};

export default LBlocks;
