import React, { Component, PropTypes, createElement } from 'react';
import get from 'lodash/get';

import EditableEditor from 'views/elements/Editable/Editor';

class Editable extends Component {
  getValue() {
    return get(this.context.block.content, this.props.path, this.props.defaultValue);
  }

  createEditorElement() {
    return (
      <EditableEditor
        element={this.props.element}
        value={this.getValue()}
        path={this.props.path}
        className={this.props.className}
        options={this.props.options}
      />
    );
  }

  createStaticElement() {
    return (
      createElement(
        this.props.element,
        {
          className: this.props.className,
          dangerouslySetInnerHTML: { __html: this.getValue() },
        },
      )
    );
  }
  render() {
    return (
      // TODO isEditMode вынести в store
      // TODO все вместе объеденитьв один флаг и вынести в selector
      (this.context.isEditMode && this.props.enable) ?
        this.createEditorElement() :
        this.createStaticElement()
    );
  }
}

Editable.propTypes = {
  element: PropTypes.string.isRequired,
  className: PropTypes.string,

  path: PropTypes.string.isRequired,

  options: PropTypes.object,
  defaultValue: PropTypes.string,

  // из store
  enable: PropTypes.bool.isRequired,
};

Editable.defaultProps = {
  element: 'div',
  enable: true,
};

Editable.contextTypes = {
  isEditMode: PropTypes.bool, // Вытащить в store
  block: PropTypes.object.isRequired,
};

export default Editable;
