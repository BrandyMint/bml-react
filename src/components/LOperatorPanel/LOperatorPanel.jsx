import './LOperatorPanel.css';

import React, { PropTypes } from 'react';

import Bubble from 'components/ui-elements/Bubble';

const LOperatorPanel = ({ exitUrl, isEditMode }) => (
  isEditMode
    ? (
      <div className="LOperatorPanel">
        <Bubble icon="times" url={exitUrl} />
      </div>
    ) : (
      <span />
    )
);

LOperatorPanel.propTypes = {
  exitUrl: PropTypes.string,
  isEditMode: PropTypes.bool,
};

export default LOperatorPanel;