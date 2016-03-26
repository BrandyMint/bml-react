import React, { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';

import classnames from 'classnames';

import get from 'lodash/get';
import bind from 'lodash/bind';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Editor from 'react-medium-editor';

const getValue = (props) => get(props.data, props.path, '');

const MEDIUM_OPTIONS = {
  disableReturn: true,
  placeholder: {
    text: 'Напишите здесь что-нибудь..',
    hideOnClick: true,
  },
  paste: {
    forcePlainText: true,
    cleanPastedHTML: true,
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
  },
  toolbar: false,
};

class StringEditable extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleBlur = bind(this.handleBlur, this);
    this.handleKeyDownEnter = bind(this.handleKeyDownEnter, this);

    this.state = {
      value: getValue(props),
    };
  }
  componentDidMount() {
    if (this.context.isEditMode) {
      this.refs.redactor.medium.subscribe('editableKeydownEnter', this.handleKeyDownEnter);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (getValue(this.props) !== getValue(nextProps)) {
      this.setState({ value: getValue(nextProps) });
    }
  }
  shouldComponentUpdate = shouldPureComponentUpdate;
  getContent() {
    return findDOMNode(this.refs.redactor).innerHTML;
  }
  handleKeyDownEnter(event) {
    event.target.blur();
    // event.target.innerHTML
    this.handleBlur();
  }
  handleBlur() {
    const path = this.props.path || this.props.fieldName;

    const { onContentChange } = this.context;
    const content = this.getContent();

    if (this.state.value !== content) {
      onContentChange(path, content);
    }
  }
  render() {
    const { className, enable } = this.props;
    const { isEditMode } = this.context;
    const { value } = this.state;

    const element = this.props.element || this.props.tagName;

    if (isEditMode && enable) {
      // TODO Выделить в отдельный класс и перенести туда
      // context-зависимые вещи
      const classes = classnames(className, 'Redactor');
      return (
        <Editor
          ref="redactor"
          tag={element}
          className={classes}
          text={value}
          onBlur={this.handleBlur}
          options={MEDIUM_OPTIONS}
        />
      );
    }
    return createElement(
      element,
      {
        className,
        dangerouslySetInnerHTML: { __html: value },
      },
    );
  }
}

StringEditable.propTypes = {
  className: PropTypes.string,
  // data: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  path: PropTypes.string.isRequired,
  // tagName: PropTypes.string,
  enable: PropTypes.bool.isRequired,
};

StringEditable.defaultProps = {
  element: 'div',
  enable: true,
};

StringEditable.contextTypes = {
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func,
  block: PropTypes.object, // Нужен только в режиме редактирования
};

export default StringEditable;
