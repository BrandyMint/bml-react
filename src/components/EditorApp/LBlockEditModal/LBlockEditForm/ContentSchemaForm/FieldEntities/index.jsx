import React, { Component, PropTypes } from 'react';
import { join, compact, split } from 'lodash';

/* eslint-disable quotes */

class FieldEntities extends Component {
  render() {
    const { field, value, onChange } = this.props;

    const entities = value;

    const handleChange = (event) => {
      const newValue = event.target.value;
      const newEntities = compact(split(newValue, "\n"));
      onChange(newEntities);
    };

    const textareaValue = join(compact(entities), "\n");

    return (
      <fieldset className="form-group">
        <label htmlFor={field.key}>
          {field.title}
        </label>
        <textarea
          className="form-control"
          type="text"
          rows="7"
          styles={ { height: 'auto' } }
          id={field.key}
          value={textareaValue}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

FieldEntities.defaultProps = {
  value: [],
};

FieldEntities.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
  }),
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default FieldEntities;
