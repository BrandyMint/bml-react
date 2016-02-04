import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';

import DropdownList from 'react-widgets/lib/DropdownList';

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

    return (
      <FormGroup fieldKey={field.key} title={field.title}>
        <DropdownList
          data={field.data}
          id={field.key}
          defaultValue={value || field.defaultValue}
          onChange={onChange}
        />
      </FormGroup>
    );
  }
}
