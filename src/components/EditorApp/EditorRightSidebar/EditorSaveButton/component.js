import React, { Component, PropTypes } from 'react';

import CheckIcon from 'react-icons/lib/md/check';
import SpinnerIcon from 'react-icons/lib/fa/spinner';
import SaveIcon from 'react-icons/lib/md/save';
import ReactTooltip from 'react-tooltip';

class EditorSaveButtom extends Component {
  render() {
    const { isSaving, hasUnsavedChanges } = this.props;

    if (isSaving) {
      return (<SpinnerIcon />);
    }

    const onSaveChanges = (event) => {
      event.preventDefault();
      this.props.onSaveChanges();
      return false;
    };

    if (hasUnsavedChanges) {
      return (
        <div>
          <a href="#"
            data-tip="Есть измениня. Сохраняйте."
            onClick={onSaveChanges}
            className="IconLink IconRed"
          >
            <SaveIcon />
          </a>
          <ReactTooltip />
        </div>
      );
    }

    return (
      <div>
        <CheckIcon
          data-multiline
          data-place="left"
          data-tip="Нет изменений.<br>Сохранять нечего."
          className="OpacityIcon"
        />
        <ReactTooltip />
      </div>);
  }
}

EditorSaveButtom.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
};

export default EditorSaveButtom;
