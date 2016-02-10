import React, { Component, PropTypes } from 'react';
import BubbleIcon from 'components/ui-elements/BubbleIcon';

import CheckIcon from 'react-icons/lib/md/check';

import SpinnerIcon from 'react-icons/lib/fa/spinner';

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
