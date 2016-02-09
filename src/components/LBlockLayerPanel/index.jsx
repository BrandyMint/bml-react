import React, { Component, PropTypes } from 'react';

import LBlockSettingsButton from 'components/LBlockSettingsButton';
import LBlockViewChanger from 'components/LBlockViewChanger';
import LBlockPositionChanger from 'components/LBlockPositionChanger';
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

      onBlockPositionDown,
      onBlockPositionUp,
    } = this.props;

    return (
      <div className="LBlockLayerPanel">
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
};

export default LBlockLayerPanel;
