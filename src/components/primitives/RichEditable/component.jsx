import React, { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';

import classnames from 'classnames';

import get from 'lodash/get';
import bind from 'lodash/bind';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MediumEditor from 'react-medium-editor';

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
    const { className, tagName, isEditMode } = this.props;
    const { value } = this.state;


    if (isEditMode) {
      const classes = classnames(className, 'Redactor');
      return (
        <MediumEditor
          ref="redactor"
          tag={tagName}
          className={classes}
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
  isEditMode: PropTypes.bool,
};

RichEditable.defaultProps = {
  tagName: 'div',
};

RichEditable.contextTypes = {
  onContentChange: PropTypes.func,
};

export default RichEditable;
