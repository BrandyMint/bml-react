import React, { Component, PropTypes } from 'react';

export default class FieldCheckbox extends Component {
  static propTypes = {
    field: PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
    }),
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { field, value, onChange } = this.props;
    const { title, key } = field;

    const handleChange = (event) => onChange(!! event.target.checked);

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={value}
            id={key}
            onChange={handleChange}
          />
          {title}
        </label>
      </div>
    );
  }
}
