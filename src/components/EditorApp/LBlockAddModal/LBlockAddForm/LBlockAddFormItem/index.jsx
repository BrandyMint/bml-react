import './LBlockAddFormItem.css';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const LBlockAddFormItem = ({
  description,
  image,
  isSelected,
  title,

  onSelect,
}) => (
  <div
    className={classnames('LBlockAddFormItem', { 'is-selected': isSelected })}
    onClick={onSelect}
  >
  <h5 className="LBlockAddFormItem-title">{title}</h5>
  </div>
);

LBlockAddFormItem.propTypes = {
  description: PropTypes.string,
  isSelected: PropTypes.bool,
  image: PropTypes.object,
  title: PropTypes.string,
  onSelect: PropTypes.func,
};

export default LBlockAddFormItem;
