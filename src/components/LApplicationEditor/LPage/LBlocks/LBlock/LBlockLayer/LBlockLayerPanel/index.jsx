import React, { Component, PropTypes } from 'react';

import LBlockSettingsButton from './LBlockSettingsButton';
import LBlockViewChanger from './LBlockViewChanger';
import LBlockPositionChanger from './LBlockPositionChanger';
// import LBlockLayerViewInfo from 'components/LBlockLayerViewInfo';

import './index.css';

class LBlockLayerPanel extends Component {

  render() {
    const {
      hasMultipleViews,
      hasMultipleBlocks,

      onEditingStart,

      onViewSwitchNext,
      onViewSwitchPrev,

      onMouseEnter,
      onMouseLeave,

      onBlockPositionDown,
      onBlockPositionUp,
    } = this.props;

    return (
      <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="LBlockLayerPanel">
        <div className="LBlockLayerPanel-actions">
          <LBlockSettingsButton onEditingStart={onEditingStart} />
          {hasMultipleViews &&
            <LBlockViewChanger
              onViewSwitchNext={onViewSwitchNext}
              onViewSwitchPrev={onViewSwitchPrev}
            />
          }
          {hasMultipleBlocks &&
            <LBlockPositionChanger
              onBlockPositionDown={onBlockPositionDown}
              onBlockPositionUp={onBlockPositionUp}
            />
          }
        </div>
      </div>
    );
  }
}

LBlockLayerPanel.propTypes = {
  onEditingStart: PropTypes.func.isRequired,

  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,

  onBlockPositionUp: PropTypes.func.isRequired,
  onBlockPositionDown: PropTypes.func.isRequired,

  hasMultipleBlocks: PropTypes.bool.isRequired,
  hasMultipleViews: PropTypes.bool.isRequired,

  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default LBlockLayerPanel;
