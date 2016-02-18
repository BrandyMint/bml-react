import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import { APP_ACTIVITY_TIMEOUT } from 'actions/application';

import partial from 'lodash/partial';

import LBlockLayerPanel from 'components/LBlockLayerPanel';

import './LBlockLayer.css';

const TIMEOUT = APP_ACTIVITY_TIMEOUT;

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
      'is-editing': true,
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

    return (
      <div
        className={layerClasses}
        onMouseMove={onMouseEnter}
      >
        <ReactCSSTransitionGroup
          component="div"
          transitionName="animation"
          transitionEnterTimeout={TRANSITION_TIMEOUT}
          transitionLeaveTimeout={TRANSITION_TIMEOUT}
        >
        {!isTopNav && (isHovered || isPanelHovered) && (
          <LBlockLayerPanel
            ref="panel"
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
