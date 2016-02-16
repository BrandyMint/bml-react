import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';

import partial from 'lodash/partial';

import LBlockLayerPanel from 'components/LBlockLayerPanel';

import './LBlockLayer.css';

const TIMEOUT = 1000;

class LBlockLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  onHover() {
    this.setState({ isHovered: true });
  }

  onUnHover() {
    this.clearTimeout();

    this.unhoverTimeout = window.setTimeout(
      () => this.setState({ isHovered: false }),
      TIMEOUT
    );
  }

  clearTimeout() {
    if (this.unhoverTimeout) {
      window.clearTimeout(this.unhoverTimeout);
    }
  }

  render() {
    const {
      block, children, isEditMode, hasMultipleBlocks, hasMultipleViews,
      onBlockPositionDown, onBlockPositionUp, onEditingStart, onViewSwitchNext, onViewSwitchPrev,
    } = this.props;

    const layerClasses = classnames({
      LBlockLayer: true,
      'is-editing': isEditMode,
    });

    const { isHovered } = this.state;

    const onMouseEnter = this.onHover.bind(this);
    const onMouseLeave = this.onUnHover.bind(this);

    const { isTopNav } = block;

    return (
      <div
        className={layerClasses}
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseLeave}
      >
        <ReactCSSTransitionGroup
          component="div"
          transitionName="animation"
          transitionEnterTimeout={TRANSITION_TIMEOUT}
          transitionLeaveTimeout={TRANSITION_TIMEOUT}
        >
        {!isTopNav && isEditMode && isHovered && (
          <LBlockLayerPanel
            ref="panel"
            hasMultipleViews={hasMultipleViews}
            hasMultipleBlocks={hasMultipleBlocks}

            onEditingStart={partial(onEditingStart, block)}

            onViewSwitchNext={partial(onViewSwitchNext, block.uuid)}
            onViewSwitchPrev={partial(onViewSwitchPrev, block.uuid)}

            onBlockPositionDown={partial(onBlockPositionDown, block.uuid)}
            onBlockPositionUp={partial(onBlockPositionUp, block.uuid)}
          />
        )}
        </ReactCSSTransitionGroup>
        <div className={block.view}>
          {Children.only(children)}
        </div>
      </div>
    );
  }
}

LBlockLayer.propTypes = {
  block: PropTypes.object,
  children: PropTypes.node,
  isEditMode: PropTypes.bool,
  hasMultipleBlocks: PropTypes.bool,
  hasMultipleViews: PropTypes.bool,
  hasControlActivity: PropTypes.bool,

  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onEditingStart: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;
