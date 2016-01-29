import './LBlockAddFormItem.css';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const LBlockAddFormItem = ({
  description,
  image,
  isSelected,
  rate,
  title,

  onSelect,
}) => (
  <div
    className={classnames('LBlockAddFormItem', { 'is-selected': isSelected })}
    onClick={onSelect}
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="LBlockAddFormItem-image">
            <img src={image.url} height={100} />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="LBlockAddFormItem-content">
            <h5 className="LBlockAddFormItem-title">{title}</h5>
            <p className="LBlockAddFormItem-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LBlockAddFormItem.propTypes = {
  description: PropTypes.string,
  isSelected: PropTypes.bool,
  image: PropTypes.object,
  rate: PropTypes.number,
  title: PropTypes.string,
  onSelect: PropTypes.func,
};

export default LBlockAddFormItem;
