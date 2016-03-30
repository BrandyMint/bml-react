import React, { PropTypes, Component } from 'react';
import includes from 'lodash/includes';
import INPUT_TYPES from 'constants/inputTypes';
import FIELD_TYPES, { DROPDOWN_TYPE } from './fieldTypes';
import invariant from 'invariant';

import Select from './Select';

class Field extends Component {
  render() {
    const { name, placeholder, inputType, dictionaryKey, defaultValue } = this.props;

    if (includes(INPUT_TYPES, inputType)) {
      return (
          <input
            type={inputType}
            name={name}
            placeholder={placeholder}
            className="form-control"
          />
        );
    }

    // TODO вытащить в ветку dictionaries
    const dictionaries = {
      categories: ['Дети', 'Фитнесс', 'Спортсмены', 'Атлеты', 'Мастера', 'Команды'],
    };

    const entities = dictionaries[dictionaryKey];
    invariant(entities, `No entities for dictionary${dictionaryKey}`);

    // TODO const
    if (inputType === DROPDOWN_TYPE) {
      return (
          <Select
            name={name}
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
};

export default Field;
