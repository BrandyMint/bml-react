import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import LBlockSettingsButton from 'components/LBlockSettingsButton';
import LBlockViewChanger from 'components/LBlockViewChanger';
import LBlockPositionChanger from 'components/LBlockPositionChanger';
import LBlockLayerViewInfo from 'components/LBlockLayerViewInfo';

import './LBlockLayer.css';

class LBlockLayer extends Component {
  render() {
    const {
      block, children, isEditMode, hasMultipleBlocks, hasMultipleViews,
      onBlockPositionDown, onBlockPositionUp, onEditingStart, onViewSwitchNext, onViewSwitchPrev,
    } = this.props;

    const layerClasses = classnames({
      'LBlockLayer': true,
      'is-editing': isEditMode,
    });

    return (
      <div className={layerClasses}>
        {isEditMode && (
          <div className="LBlockLayer-topPanel">
            <div className="LBlockLayer-actions">
              <LBlockSettingsButton onEditingStart={() => onEditingStart(block)} />
              {hasMultipleViews &&
                <LBlockViewChanger
                  onViewSwitchNext={() => onViewSwitchNext(block.uuid)}
                  onViewSwitchPrev={() => onViewSwitchPrev(block.uuid)}
                />
              }
              {hasMultipleBlocks &&
                <LBlockPositionChanger
                  onBlockPositionDown={() => onBlockPositionDown(block.uuid)}
                  onBlockPositionUp={() => onBlockPositionUp(block.uuid)}
                />
              }
            </div>
            <LBlockLayerViewInfo block={block} />
          </div>
        )}
        {Children.only(children)}
      </div>
    );
  }
}

LBlockLayer.propTypes = {
  block: PropTypes.object,
  isEditMode: PropTypes.bool,
  hasMultipleViews: PropTypes.bool,

  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onEditingStart: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;
