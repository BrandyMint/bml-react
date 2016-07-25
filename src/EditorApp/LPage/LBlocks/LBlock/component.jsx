import React, { Component, PropTypes } from 'react';
import LBlockAddButtonController from '../LBlockAddButtonController';
import partial from 'lodash/partial';
import BlockSettingsPanel from './BlockSettingsPanel';
import { findDOMNode } from 'react-dom';
import Animated from 'components/primitives/Animated';

import ViewComponent from 'components/shared/ViewComponent';

import './index.css';

// Minimal visible height of block to show SettingsPanel
//
const MIN_HEIGHT = 120;

// Minimal bottom offset to benot overlayed by Material PlusIcon
const OFFSET_BOTTOM = 200;

class LBlock extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      settingsFixed: false,
      settingsVisible: true,
      mouseOver: false,
    };
  }

  getChildContext() {
    const { block, onContentChange } = this.props;

    return {
      onContentChange: partial(onContentChange, block.uuid),
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const should = nextProps.block != this.props.block ||
      nextState.mouseOver != this.state.mouseOver ||
      nextState.settingsVisible != this.state.settingsVisible ||
      nextState.settingsFixed != this.state.settingsFixed;
    return should;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onMouseLeave() {
    this.setState({ mouseOver: false });
  }

  onMouseOver() {
    this.setState({ mouseOver: true });
  }

  getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  handleScroll() {
    const element = findDOMNode(this);
    const rect = element.getBoundingClientRect()

    const visible = rect.bottom > MIN_HEIGHT &&
      rect.top < this.getViewportHeight() - OFFSET_BOTTOM;
    const fixed = rect.top < 0;

    this.setState({
      settingsFixed: fixed,
      settingsVisible: visible,
    });
  }

  render() {
    const { block, index } = this.props;

    return (
      <div className="LBlock" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        <Animated>
          {this.state.settingsVisible && this.state.mouseOver && <BlockSettingsPanel block={block} fixed={this.state.settingsFixed} />}
        </Animated>
        <ViewComponent block={block} />
        <LBlockAddButtonController index={index} />
      </div>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  index: PropTypes.number.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  onContentChange: PropTypes.func,
};

export default LBlock;
