import React, { Component, PropTypes } from 'react';

import get from 'lodash/get';
import bind from 'lodash/bind';

import { ESC } from 'constants/keyCodes';

import Redactor from 'components/ui-elements/Redactor';

const getValue = (props) => get(props.data, props.fieldName, '');

class StringEditable extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleBlur = bind(this.handleBlur, this);
    this.handleKeyDown = bind(this.handleKeyDown, this);
    this.handleKeyDownEnter = bind(this.handleKeyDownEnter, this);

    this.state = {
      value: getValue(props),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (getValue(this.props) !== getValue(nextProps)) {
      this.setState({ value: getValue(nextProps) });
    }
  }
  handleKeyDown(event) {
    if (event.keyCode === ESC) {
      event.target.blur();
      this.setState({ value: getValue(this.props) });
    } else {
      this.setState({ value: event.target.innerHTML });
    }
  }
  handleKeyDownEnter(event) {
    const { fieldName } = this.props;
    const { onFieldChange } = this.context;

    event.target.blur();
    onFieldChange(fieldName, event.target.innerHTML);
  }
  handleBlur() {
    this.setState({ value: getValue(this.props) });
  }
  render() {
    const { className, tagName } = this.props;
    const { isEditMode } = this.context;
    const { value } = this.state;

    return (
      <Redactor
        className={className}
        readOnly={!isEditMode}
        tagName={tagName}
        value={value}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onKeyDownEnter={this.handleKeyDownEnter}
      />
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
  onFieldChange: PropTypes.func.isRequired,
};

export default StringEditable;