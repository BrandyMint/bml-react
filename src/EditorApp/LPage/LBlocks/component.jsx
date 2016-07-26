import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { animateScroll } from 'react-scroll';
import Animated from 'components/primitives/Animated';
import difference from 'lodash/difference';
import findIndex from 'lodash/findIndex';
import invariant from 'invariant';

import EmptyPlaceholder from './EmptyPlaceholder';
import LBlock from './LBlock';

const SCROLL_OPTIONS = { duration: 500 };

class LBlocks extends Component {
  shouldComponentUpdate(nextProps) {
    const should = this.props.blocks !== nextProps.blocks;
    return should;
  }

  componentDidUpdate(prevProps) {
    if (this.props.blocks.length === 0 || prevProps.blocks.length === 0) {
      return;
    }

    const prevUuids = prevProps.blocks.map(({uuid})=>uuid);
    const currentUuids = this.props.blocks.map(({uuid})=>uuid);

    const newUuids = difference(currentUuids, prevUuids);
    if (newUuids.length === 0) {
      return;
    }

    const targetUuid = newUuids[0];
    const index = findIndex(currentUuids, (uuid) => (uuid===targetUuid));
    invariant(index>=0, 'Index must be greater or equal zero');

    // Realy it does not work right way and we don't need it
    // this.scrollBlock(index);
  }

  scrollBlock(index) {
    const refName = this.blockRef(index);
    const ref = this.refs[refName];
    invariant(ref, `Not found ref for '${refName}'`);
    const target = findDOMNode(ref);
    invariant(target, `Not found node for '${refName}'`);
    const coordinates = target.getBoundingClientRect();
    animateScroll.animateTopScroll(coordinates.bottom, SCROLL_OPTIONS, refName, target);
  }

  scrollBottom() {
    this.scrollBlock(this.props.blocks.length-1);
  }

  blockRef(index) {
    return `block${index}`;
  }

  render() {
    const { blocks } = this.props;
    this.lastRenderedBlock = blocks.length > 0 ? blocks[blocks.length-1] : undefined;

    if (blocks.length === 0) {
      return (<EmptyPlaceholder />);
    }

    // Можно избавиться от передачи index. Лучше в тех местах где нужен index брать через redux список блоков
    return (
      <Animated>
        {blocks.map((block, index) =>
           <LBlock block={block} ref={this.blockRef(index)} index={index} key={block.uuid} />
        )}
      </Animated>
    );
  }
}

LBlocks.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default LBlocks;
