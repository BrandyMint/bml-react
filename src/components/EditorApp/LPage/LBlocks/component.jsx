import React, { PropTypes, Component } from 'react';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import EmptyPlaceholder from './EmptyPlaceholder';
import LBlockSection from './LBlockSection';

import Animated from 'components/primitives/Animated';

class LBlocks extends Component {
  render() {
    const { blocks } = this.props;

    console.log('LBlocks',  Date.now());

    if (isEmpty(blocks)) {
      return (<EmptyPlaceholder />);
    }

    return (
      <Animated >
        {map(blocks, (block, index) =>
           <LBlockSection block={block} index={index} key={block.uuid} />
        )}
      </Animated>
    );
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default LBlocks;
