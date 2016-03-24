import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import Animated from 'components/primitives/Animated';
import partial from 'lodash/partial';

import LBlockLayerPanel from './LBlockLayerPanel';

import './LBlockLayer.css';

const TIMEOUT = 500;

class LBlockLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isPanelHovered: false,
    };
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  onHover() {
    this.clearTimeout();
    this.setState({ isHovered: true });
    // this.props.onActive();
    // onActive={partial(onCurrentBlock, block.uuid)
    this.unhoverTimeout = window.setTimeout(
      () => this.setState({ isHovered: false }),
      TIMEOUT
    );
  }

  onUnHover() {
    this.clearTimeout();
  }

  clearTimeout() {
    if (this.unhoverTimeout) {
      window.clearTimeout(this.unhoverTimeout);
    }
  }

  render() {
    const {
      block, children, hasMultipleBlocks, hasMultipleViews,
      onBlockPositionDown, onBlockPositionUp, onEditingStart, onViewSwitchNext, onViewSwitchPrev,
    } = this.props;

    const layerClasses = classnames({
      LBlockLayer: true,
    });

    const { isHovered, isPanelHovered } = this.state;

    const onMouseEnter = this.onHover.bind(this);
    // const onMouseLeave = this.onUnHover.bind(this);

    const onPanelMouseEnter = () => {
      this.setState({ isPanelHovered: true });
      onMouseEnter();
    };

    const onPanelMouseLeave = () => {
      this.setState({ isPanelHovered: false });
    };

    const { isTopNav } = block;

    const SectionPanel = (
      <Animated>
        {!isTopNav && (isHovered || isPanelHovered) && (
          <LBlockLayerPanel
            block={block}
            hasMultipleViews={hasMultipleViews}
            hasMultipleBlocks={hasMultipleBlocks}

            onMouseEnter={onPanelMouseEnter}
            onMouseLeave={onPanelMouseLeave}

            onEditingStart={partial(onEditingStart, block)}

            onViewSwitchNext={partial(onViewSwitchNext, block.uuid)}
            onViewSwitchPrev={partial(onViewSwitchPrev, block.uuid)}

            onBlockPositionDown={partial(onBlockPositionDown, block.uuid)}
            onBlockPositionUp={partial(onBlockPositionUp, block.uuid)}
          />
        )}
      </Animated>
    );

    return (
      <div className={layerClasses} onMouseMove={onMouseEnter} >
        {SectionPanel}
        {Children.only(children)}
      </div>
    );
  }
}

LBlockLayer.propTypes = {
  block: PropTypes.object,
  children: PropTypes.node,
  hasMultipleBlocks: PropTypes.bool,
  hasMultipleViews: PropTypes.bool,

  // onActive: PropTypes.func.isRequired,
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onEditingStart: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;
