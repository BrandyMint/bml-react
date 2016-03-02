import React, { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';

import get from 'lodash/get';
import bind from 'lodash/bind';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Redactor from 'components/ui-elements/Redactor';

const getValue = (props) => get(props.data, props.fieldName, '');

class StringEditable extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleBlur = bind(this.handleBlur, this);
    this.handleKeyDownEnter = bind(this.handleKeyDownEnter, this);

    this.state = {
      value: getValue(props),
    };
  }
  shouldComponentUpdate = shouldPureComponentUpdate;
  componentWillReceiveProps(nextProps) {
    if (getValue(this.props) !== getValue(nextProps)) {
      this.setState({ value: getValue(nextProps) });
    }
  }
  handleChange(event) {
  }
  handleKeyDownEnter(event) {
    const { fieldName } = this.props;
    const { onContentChange } = this.context;

    event.target.blur();
    onContentChange(fieldName, event.target.innerHTML);
  }
  handleBlur() {
    const { fieldName } = this.props;
    const { onContentChange } = this.context;

    onContentChange(fieldName, findDOMNode(this.refs.redactor).innerHTML);
  }
  render() {
    const { className, tagName } = this.props;
    const { isEditMode } = this.context;
    const { value } = this.state;

    if (isEditMode) {
      return (
        <Redactor
          ref="redactor"
          className={className}
          tagName={tagName}
          value={value}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      );
      // onKeyDownEnter={this.handleKeyDownEnter}
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

StringEditable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  tagName: PropTypes.string,
};

StringEditable.defaultProps = {
  tagName: 'div',
};

StringEditable.contextTypes = {
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func,
};

export default StringEditable;
