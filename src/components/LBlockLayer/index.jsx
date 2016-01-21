import './LBlockLayer.css';

import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import LBlockSettingsButton from 'components/LBlockSettingsButton';
import LBlockViewChanger from 'components/LBlockViewChanger';
import LBlockPositionChanger from 'components/LBlockPositionChanger';

const LBlockLayer = ({
  children,
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
        <div className="LBlockLayer-actions">
          <LBlockSettingsButton />
          <LBlockViewChanger
            onViewSwitchNext={onViewSwitchNext}
            onViewSwitchPrev={onViewSwitchPrev}
          />
          <LBlockPositionChanger
            onBlockPositionDown={onBlockPositionDown}
            onBlockPositionUp={onBlockPositionUp}
          />
        </div>
      )}
      {Children.only(children)}
    </div>
  );
};

LBlockLayer.propTypes = {
  isEditMode: PropTypes.bool,
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;