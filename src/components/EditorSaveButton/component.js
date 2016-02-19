import React, { Component, PropTypes } from 'react';

import CheckIcon from 'react-icons/lib/md/check';
import SpinnerIcon from 'react-icons/lib/fa/spinner';
import SaveIcon from 'react-icons/lib/md/save';

class EditorSaveButtom extends Component {
  render() {
    const { isSaving, onSaveChanges, hasUnsavedChanges } = this.props;

    if (isSaving) {
      return (<SpinnerIcon />);
    }

    if (hasUnsavedChanges) {
      return (
        <a href="#" onClick={onSaveChanges} className="IconLink IconRed">
          <SaveIcon />
        </a>
      );
    }

    return (<CheckIcon className="OpacityIcon" />);
  }
}

EditorSaveButtom.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
};

export default EditorSaveButtom;
