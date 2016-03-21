import React, { Component, PropTypes } from 'react';

import SuperBubble from 'components/ui-elements/SuperBubble';

import CheckIcon from 'react-icons/lib/md/check';
import SpinnerIcon from 'react-icons/lib/fa/spinner';
import SaveIcon from 'react-icons/lib/md/save';

class EditorSaveButtom extends Component {
  render() {
    const { isSaving, hasUnsavedChanges } = this.props;

    if (isSaving) {
      return (<SuperBubble className="SuperBubble--blue">
                <SpinnerIcon className="SuperBubble--icon" />
              </SuperBubble>);
    }

    const onSaveChanges = (event) => {
      event.preventDefault();
      this.props.onSaveChanges();
      return false;
    };

    if (hasUnsavedChanges) {
      return (
        <a href="#"
          data-tip="Есть измениня. Сохраняйте."
          onClick={onSaveChanges}
          clasName="IconLink"
        >
          <SuperBubble className="SuperBubble--red">
            <SaveIcon className="SuperBubble--icon"/>
          </SuperBubble>
        </a>
      );
    }

    return (
      <SuperBubble >
        <CheckIcon
          data-multiline
          data-place="left"
          data-tip="Нет изменений.<br>Сохранять нечего."
          className="SuperBubble--icon"
        />
      </SuperBubble>);
  }
}

EditorSaveButtom.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
};

export default EditorSaveButtom;
