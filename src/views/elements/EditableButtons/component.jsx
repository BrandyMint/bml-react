import React, { Component, PropTypes } from 'react';

import EditableEditor from 'views/elements/Editable/Editor';
import EditorOptions from 'views/elements/Editable/options';

import shallowCompare from 'react-addons-shallow-compare';

import Buttons from 'views/elements/Buttons';

import classnames from 'classnames';
import get from 'lodash/get';
import map from 'lodash/map';

const DEFAULT_BUTTON_TEXT = 'КНОПКА';

class EditableButtons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  getButtons() {
    return get(this.context.block.content, this.props.path, this.props.defaultValue);
  }

  getButtonText(index) {
    return get(this.context.block.content, this.getButtonTextPath(index), DEFAULT_BUTTON_TEXT);
  }

  getButtonTextPath(index) {
    return `${this.props.path}[${index}].text`;
  }

  createEditorElement() {
    const buttons = this.getButtons();
    const classNames = classnames('BML-buttons-group', this.props.className);

    return (<div className={classNames}>
              {map(buttons, (button, index) =>
                <EditableEditor
                  key={index}
                  options={EditorOptions.button}
                  className="btn btn-lg btn-filled BML-button-item"
                  element="a"
                  value={this.getButtonText(index)}
                  path={this.getButtonTextPath(index)}
                />)
              }
            </div>);
  }

  createStaticElement() {
    return (
      <Buttons
        buttons={this.getButtons()}
        className={this.props.className}
      />);
  }

  render() {
    return (
      // TODO isEditor вынести в store
      // TODO все вместе объеденитьв один флаг и вынести в selector
      (this.props.enable) ?
        this.createEditorElement() :
        this.createStaticElement()
    );
  }
}

EditableButtons.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,

  defaultValue: PropTypes.array.isRequired,

  enable: PropTypes.bool.isRequired,
};

EditableButtons.defaultProps = {
  defaultValue: [],
};

EditableButtons.contextTypes = {
  block: PropTypes.object.isRequired,
};

export default EditableButtons;
