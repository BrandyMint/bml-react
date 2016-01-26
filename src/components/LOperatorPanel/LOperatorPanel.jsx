import './LOperatorPanel.css';

import React, { PropTypes } from 'react';

import Bubble from 'components/ui-elements/Bubble';

const LOperatorPanel = ({
  exitUrl,
  hasUnsavedChanges,
  isEditMode,
  onSaveChanges
}) => (
  isEditMode
    ? (
      <div className="LOperatorPanel">
        {hasUnsavedChanges &&
          <Bubble icon="check" onClick={onSaveChanges} />
        }
        <Bubble icon="times" url={exitUrl} />
      </div>
    ) : (
      <span />
    )
);

LOperatorPanel.propTypes = {
  exitUrl: PropTypes.string,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool,
  onSaveChanges: PropTypes.func.isRequired,
};

export default LOperatorPanel;