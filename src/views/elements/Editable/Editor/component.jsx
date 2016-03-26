import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Editor from 'react-medium-editor';
import shouldPureComponentUpdate from 'react-pure-render/function';

import classnames from 'classnames';
import EditorOptions from '../options';

import bind from 'lodash/bind';

const DEFAULT_VALUE = 'Текст';


// TODO перенсти сюда стили
// TODO BML-Redactor

// Собственно это Redactor
class EditableEditor extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleBlur = bind(this.handleBlur, this);
    this.handleKeyDownEnter = bind(this.handleKeyDownEnter, this);

    this.state = {
      value: this.props.value,
    };
  }
  componentDidMount() {
    if (this.props.options.disableReturn) {
      this.refs.redactor.medium.subscribe('editableKeydownEnter', this.handleKeyDownEnter);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }
  shouldComponentUpdate = shouldPureComponentUpdate;

  getEditedValue() {
    return findDOMNode(this.refs.redactor).innerHTML;
  }
  handleKeyDownEnter(event) {
    event.target.blur();
    this.handleBlur();
  }
  handleBlur() {
    const { path } = this.props;
    const { onContentChange } = this.context;
    const editedValue = this.getEditedValue();

    if (this.state.value !== editedValue) {
      onContentChange(path, editedValue);
    }
  }
  render() {
    const { className, element } = this.props;
    return (<Editor
      ref="redactor"
      tag={element}
      className={classnames(className, 'Redactor')}
      text={this.state.value}
      onBlur={this.handleBlur}
      options={this.props.options}
    />);
  }
}

EditableEditor.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

EditableEditor.defaultProps = {
  element: 'div',
  enable: true,
  defaultValue: DEFAULT_VALUE,
  options: EditorOptions.string,
};

EditableEditor.contextTypes = {
  onContentChange: PropTypes.func.isRequired, // Опустить ниже в EditableEditor
  block: PropTypes.object.isRequired,
};

export default EditableEditor;
