import React, { PropTypes, Component } from 'react';
import includes from 'lodash/includes';
import INPUT_TYPES from 'constants/inputTypes';
import FIELD_TYPES, { DROPDOWN_TYPE } from './fieldTypes';
import InputElement from 'react-input-mask';

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
      mask,
      formatChars,
      onBlur,
    } = this.props;

    if (includes(INPUT_TYPES, inputType)) {
      return (
          <InputElement
            mask={mask}
            type={inputType}
            required={isRequired}
            name={name}
            placeholder={placeholder}
            className="form-control"
            onBlur={onBlur}
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
            onBlur={onBlur}
          />
        );
    }

    return undefined;
  }
}

Field.propTypes = {
  mask: PropTypes.string,
  formatChars: PropTypes.object,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(FIELD_TYPES).isRequired,
  dictionaryKey: PropTypes.string,
  defaultValue: PropTypes.string,
  entities: PropTypes.array,
  isRequired: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default Field;
