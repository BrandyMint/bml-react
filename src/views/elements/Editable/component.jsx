import React, { Component, PropTypes, createElement } from 'react';
import get from 'lodash/get';

import EditableEditor from 'views/elements/Editable/Editor';

class Editable extends Component {
  shouldComponentUpdate(){
    // TODO Проблема в том, что контент меняется в context-е
    // const should = shallowCompare(this, nextProps, nextState);
    // TODO зависит и от props и от context
    // Хотя это странно если у компонента будут меняться props
    return true;
  }

  getValue() {
    return get(this.context.block.content, this.props.path, this.props.defaultValue);
  }

  isEditing() {
    return this.context.isEditor && this.props.enable;
  }

  createEditorElement() {
    return (
      <EditableEditor
        value={this.getValue()}
        element={this.props.element}
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
    return this.isEditing() ?  this.createEditorElement() : this.createStaticElement();
  }
}

Editable.propTypes = {
  element: PropTypes.string.isRequired,
  className: PropTypes.string,

  path: PropTypes.string.isRequired,

  options: PropTypes.object,
  defaultValue: PropTypes.string,

  enable: PropTypes.bool.isRequired,
};

Editable.defaultProps = {
  element: 'div',
  enable: true,
};

Editable.contextTypes = {
  block: PropTypes.object.isRequired,
  isEditor: PropTypes.bool,
};

export default Editable;
