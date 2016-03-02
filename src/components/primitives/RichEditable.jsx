import React, { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';

import get from 'lodash/get';
import bind from 'lodash/bind';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Editor from 'react-medium-editor';

const getValue = (props) => get(props.data, props.fieldName, '');

const MEDIUM_OPTIONS = {
  paste: {
    cleanPastedHTML: true,
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
  },
  toolbar: {
    allowMultiParagraphSelection: false,
    static: true,
    sticky: true,
  },
};

class RichEditable extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleBlur = bind(this.handleBlur, this);

    this.state = {
      value: getValue(props),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (getValue(this.props) !== getValue(nextProps)) {
      this.setState({ value: getValue(nextProps) });
    }
  }
  shouldComponentUpdate = shouldPureComponentUpdate;
  handleBlur() {
    const { fieldName } = this.props;
    const { onContentChange } = this.context;

    const content = findDOMNode(this.refs.redactor).innerHTML;
    if (this.state.value !== content) {
      onContentChange(fieldName, content);
    }
  }
  render() {
    const { className, tagName } = this.props;
    const { isEditMode } = this.context;
    const { value } = this.state;

    if (isEditMode) {
      return (
        <Editor
          ref="redactor"
          tag={tagName}
          className={className}
          text={value}
          onBlur={this.handleBlur}
          options={MEDIUM_OPTIONS}
        />
      );
    }
    return createElement(
      tagName,
      {
        className,
        dangerouslySetInnerHTML: { __html: value },
      },
    );
  }
}

RichEditable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  tagName: PropTypes.string,
};

RichEditable.defaultProps = {
  tagName: 'div',
};

RichEditable.contextTypes = {
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func,
};

export default RichEditable;
