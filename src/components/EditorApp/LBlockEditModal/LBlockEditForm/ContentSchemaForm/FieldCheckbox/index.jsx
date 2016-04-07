import React, { Component, PropTypes } from 'react';

import Checkbox from 'material-ui/lib/checkbox';

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

    const handleChange = (event) => onChange(!! event.target.checked);

    return (
      <div className="m-b-md m-t-md">
        <Checkbox
          label={field.title}
          defaultChecked={value}
          onChange={handleChange}
        />
      </div>
    );
  }
}
