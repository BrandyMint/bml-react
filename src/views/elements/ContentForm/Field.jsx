import React, { PropTypes, Component } from 'react';
import includes from 'lodash/includes';
import INPUT_TYPES from 'constants/inputTypes';
import FIELD_TYPES, { DROPDOWN_TYPE } from './fieldTypes';
// import invariant from 'invariant';

import Select from './Select';

class Field extends Component {
  render() {
    const {
      name,
      entities,
      placeholder,
      inputType,
      dictionaryKey,
      isRequired,
      defaultValue,
    } = this.props;

    if (includes(INPUT_TYPES, inputType)) {
      return (
          <input
            type={inputType}
            required={isRequired}
            name={name}
            placeholder={placeholder}
            className="form-control"
          />
        );
    }

    // const entities = dictionaries[dictionaryKey];
    // invariant(entities, `No entities for dictionary${dictionaryKey}`);

    // TODO const
    if (inputType === DROPDOWN_TYPE) {
      return (
          <Select
            name={name}
            dictionaryKey={dictionaryKey}
            placeholder={placeholder}
            defaultValue={defaultValue}
            options={entities}
          />
        );
    }

    return undefined;
  }
}

Field.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(FIELD_TYPES).isRequired,
  dictionaryKey: PropTypes.string,
  defaultValue: PropTypes.string,
  entities: PropTypes.array,
  isRequired: PropTypes.bool,
};

export default Field;
