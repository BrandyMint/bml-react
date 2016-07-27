import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ReactMediumEditor from 'react-medium-editor';
import shouldPureComponentUpdate from 'react-pure-render/function';

import classnames from 'classnames';
import EditorOptions from '../options';

const DEFAULT_VALUE = 'Текст';


// TODO перенсти сюда стили
// TODO BML-Redactor

// Собственно это Redactor
class EditableEditor extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDownEnter = this.handleKeyDownEnter.bind(this);

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

    this.props.changeEditable(null);
    if (this.state.value !== editedValue) {
      onContentChange(path, editedValue);
    }
  }
  handleFocus() {
    this.props.changeEditable(this.props.path);
  }
  render() {
    const { className, element } = this.props;
    return (<ReactMediumEditor
      ref="redactor"
      tag={element}
      className={classnames(className, 'Redactor')}
      text={this.state.value}
      onFocus={this.handleFocus}
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
  changeEditable: PropTypes.func.isRequired,
};

EditableEditor.defaultProps = {
  element: 'div',
  defaultValue: DEFAULT_VALUE,
  options: EditorOptions.string,
};

EditableEditor.contextTypes = {
  onContentChange: PropTypes.func.isRequired, // Опустить ниже в EditableEditor
  block: PropTypes.object.isRequired,
};

export default EditableEditor;
