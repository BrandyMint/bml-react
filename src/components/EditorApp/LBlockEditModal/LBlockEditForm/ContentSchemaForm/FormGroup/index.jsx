import React, { Component, PropTypes } from 'react';

export default class FormGroup extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    fieldKey: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { title, fieldKey, children } = this.props;

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
          </label>
          {children}
      </fieldset>
    );
  }
}
