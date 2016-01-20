import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import './LBlockLayer.css';

// LBlockLayerEditable
// LBlockLayerView
import LBlockSettingsButton from 'components/LBlockSettingsButton';
import LBlockViewChanger from 'components/LBlockViewChanger';

const LBlockLayer = ({ children, isEditMode, onViewSwitchNext, onViewSwitchPrev }) => {
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
        </div>
      )}
      {Children.only(children)}
    </div>
  );
};

LBlockLayer.propTypes = {
  isEditMode: PropTypes.bool,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;