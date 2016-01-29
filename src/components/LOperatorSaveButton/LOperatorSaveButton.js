import React, { Component, PropTypes } from 'react';
import Bubble from 'components/ui-elements/Bubble';

class LOperatorSaveButton extends Component {
  render() {
    const { isSaving, onSaveChanges } = this.props;

    if (isSaving) {
      return (
        <Bubble
          isProcessing
          icon="spinner"
        />
      );
    }

    return (
      <Bubble
        icon="check"
        onClick={onSaveChanges}
      />
    );
  }
}

LOperatorSaveButton.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
};

export default LOperatorSaveButton;
