import React, { PropTypes } from 'react';
import map from 'lodash/map';

const Option = ({ data }) => {
  if (typeof data === 'object') {
    return <option value={data.value}>{data.text}</option>;
  }
  return <option value={data}>{data}</option>;
};

const OptionObjectData = PropTypes.shape({
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

const OptionData = PropTypes.oneOfType([OptionObjectData, PropTypes.string]);

Option.propTypes = {
  data: OptionData.isRequired,
};

const Select = ({ name, multiple, required, options }) => (
  <select name={name} multiple={multiple} required={required} className="form-control">
    {map(options, (option, index) => <Option key={index} data={option} />)}
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(OptionData).isRequired,
};

export default Select;
