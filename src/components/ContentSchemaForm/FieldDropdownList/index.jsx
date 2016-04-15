import React, { Component, PropTypes } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class FieldDropdownList extends Component {
  static propTypes = {
    field: PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
      data: PropTypes.array.isRequired,
    }),
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { field, value, onChange } = this.props;

    const items = field.data.map(
      (item, index) =>
        <MenuItem value={item} primaryText={item} key={index} />
    );

    const handleChange = (e, v) => onChange(field.data[v]);

    return (
      <SelectField
        value={value}
        onChange={handleChange}
        floatingLabelText={field.title}
        hintText={field.title}
      >
        {items}
      </SelectField>
    );
  }
}
