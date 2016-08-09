import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import LBlockAddButtonController from '../LBlockAddButtonController';
import partial from 'lodash/partial';
// import BlockSettingsPanel from './BlockSettingsPanel';
import SettingsPanel from './SettingsPanel';
import SettingsButton from './SettingsButton';
import Animated from 'components/primitives/Animated';

import ViewComponent from 'components/shared/ViewComponent';
import css from './index.css';

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
    this.onMouseOverSettingsButton = this.onMouseOverSettingsButton.bind(this);
    this.state = {
      mouseOverSettingsButton: false,
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
      nextProps.panelSettingsOpen != this.props.panelSettingsOpen ||
      nextState.mouseOverSettingsButton != this.state.mouseOverSettingsButton ||
      nextState.settingsFixed != this.state.settingsFixed;
    return should;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onMouseOverSettingsButton(flag) {
    this.setState({
      mouseOverSettingsButton: flag,
    });
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
    const { panelSettingsOpen, block, index } = this.props;

    const isSettingsOpen = panelSettingsOpen === block;

    const className = isSettingsOpen ? css.blockShifted : (this.state.mouseOverSettingsButton ? css.blockOver : css.block);

    return (
      <div className={css.container}>
        <SettingsPanel block={block} />
        <div className={className} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          <Animated>
            {
              this.state.settingsVisible &&
                (this.state.mouseOver || isSettingsOpen) &&
                <SettingsButton
                  block={block}
                  onOver={this.onMouseOverSettingsButton}
                  isOpen={isSettingsOpen}
                />
              }
          </Animated>
          <ViewComponent block={block} />
        </div>
        <LBlockAddButtonController index={index + 1} />
      </div>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  panelSettingsOpen: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  onContentChange: PropTypes.func,
};

export default LBlock;
