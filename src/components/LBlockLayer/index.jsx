import './LBlockLayer.css';

import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import LBlockSettingsButton from 'components/LBlockSettingsButton';
import LBlockViewChanger from 'components/LBlockViewChanger';
import LBlockPositionChanger from 'components/LBlockPositionChanger';

const LBlockLayer = ({
  block,
  children,
  hasMultipleBlocks,
  hasMultipleViews,
  isEditMode,

  onBlockPositionDown,
  onBlockPositionUp,
  onViewSwitchNext,
  onViewSwitchPrev
}) => {
  const layerClasses = classnames({
    'LBlockLayer': true,
    'is-editing': isEditMode,
  });

  return (
    <div className={layerClasses}>
      {isEditMode && (
        <div className="LBlockLayer-topPanel">
          <div className="LBlockLayer-actions">
            <LBlockSettingsButton />
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
          <div className="LBlockLayer-viewInfo text-muted">
            {block.view}
          </div>
        </div>
      )}
      {Children.only(children)}
    </div>
  );
};

LBlockLayer.propTypes = {
  block: PropTypes.object,
  isEditMode: PropTypes.bool,
  hasMultipleViews: PropTypes.bool,
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;