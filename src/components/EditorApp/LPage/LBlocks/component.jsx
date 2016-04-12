import React, { PropTypes, Component } from 'react';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import EmptyPlaceholder from './EmptyPlaceholder';
import LBlock from './LBlock';

import Animated from 'components/primitives/Animated';

class LBlocks extends Component {
  shouldComponentUpdate(nextProps) {
    const should = this.props.blocks !== nextProps.blocks;
    return should;
  }
  render() {
    const { blocks } = this.props;

    if (isEmpty(blocks)) {
      return (<EmptyPlaceholder />);
    }

    // TODO Избавиться от передачи index. Лучше в тех местах где нужен index брать через redux список блоков
    return (
      <Animated>
        {map(blocks, (block, index) =>
           <LBlock block={block} index={index} key={block.uuid} />
        )}
      </Animated>
    );
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default LBlocks;
