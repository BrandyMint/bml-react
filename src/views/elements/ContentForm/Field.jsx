import React, { PropTypes, Component } from 'react';
import includes from 'lodash/includes';
import INPUT_TYPES from 'constants/inputTypes';

import DropdownList from 'react-widgets/lib/DropdownList';

class Field extends Component {
  render() {
    const { name, placeholder, inputType } = this.props;
    console.log(inputType);

    if (includes(INPUT_TYPES, inputType)) {
      return (
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />);
    }

    // TODO const
    if (inputType === 'dropdownList') {
      const defaultValue = undefined;
      const entities = ['a', 'b'];
      return <DropdownList defaultValue={defaultValue} data={entities} />;
    }

    return undefined;
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(INPUT_TYPES).isRequired,
};

export default Field;
