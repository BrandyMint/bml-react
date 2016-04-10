import React, { PropTypes, Component } from 'react';
import UserInputTypes, { DROPDOWN_INPUT_TYPE } from './inputTypes';
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
      onBlur,
    } = this.props;

    if (inputType === DROPDOWN_INPUT_TYPE) {
      // const entities = dictionaries[dictionaryKey];
      // invariant(entities, `No entities for dictionary${dictionaryKey}`);

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

    if (inputType === 'checkbox') {
      return (
        <input
          name={name}
          type="checkbox"
          defaultChecked={defaultValue}
        />
      );
    }

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
}

Field.propTypes = {
  mask: PropTypes.string,
  formatChars: PropTypes.object,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(UserInputTypes).isRequired,
  dictionaryKey: PropTypes.string,
  defaultValue: PropTypes.string,
  entities: PropTypes.array,
  isRequired: PropTypes.bool,
  onBlur: PropTypes.func,
};

export default Field;
