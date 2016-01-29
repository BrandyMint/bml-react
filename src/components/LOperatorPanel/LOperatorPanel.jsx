import React, { Component, PropTypes } from 'react';

import './LOperatorPanel.css';

import Bubble from 'components/ui-elements/Bubble';

class LOperatorPanel extends Component {
  componentDidUpdate() {
    window.onbeforeunload = this.props.hasUnsavedChanges
      ? () => 'Хотите закрыть конструктор, не сохранив изменения?'
      : null;
  }
  render() {
    const { exitUrl, hasUnsavedChanges, isEditMode, onSaveChanges } = this.props;

    if (isEditMode) {
      return (
        <div className="LOperatorPanel">
          {hasUnsavedChanges &&
            <Bubble icon="check" onClick={onSaveChanges} />
          }
          <Bubble icon="times" url={exitUrl} />
        </div>
      );
    }

    return false;
  }
}

LOperatorPanel.propTypes = {
  exitUrl: PropTypes.string,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool,
  onSaveChanges: PropTypes.func.isRequired,
};

export default LOperatorPanel;
