import React, { Component, PropTypes } from 'react';
import BubbleIcon from 'components/ui-elements/BubbleIcon';

import CheckIcon from 'react-icons/md/check';

import SpinnerIcon from 'react-icons/fa/spinner';

class LOperatorSaveButton extends Component {
  render() {
    const { isSaving, onSaveChanges } = this.props;

    if (isSaving) {
      return (
        <BubbleIcon isProcessing>
          <SpinnerIcon />
        </BubbleIcon>
      );
    }

    return (
      <BubbleIcon onClick={onSaveChanges}>
        <CheckIcon />
      </BubbleIcon>
    );
  }
}

LOperatorSaveButton.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
};

export default LOperatorSaveButton;
