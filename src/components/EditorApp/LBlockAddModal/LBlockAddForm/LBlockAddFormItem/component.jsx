import './LBlockAddFormItem.css';
import classnames from 'classnames';

import React, { PropTypes } from 'react';

const DEFAULT_ICON = 'ti-layout-width-default-alt';

const LBlockAddFormItem = ({ example, onAdd }) => {
  const { title, viewName } = example;

  const onClick = () => onAdd(example);

  const classNames = classnames(example.icon || DEFAULT_ICON, 'LBlockAddFormItem-icon');

  return (
    <div className="LBlockAddFormItem" onClick={onClick}>
      <h5 className="LBlockAddFormItem-title">
        <span className={classNames} />
        <span>{title || viewName}</span>
      </h5>
    </div>
  );
};

const ViewExamplePropTypes = {
  viewName: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired,
};

LBlockAddFormItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
  example: PropTypes.shape(ViewExamplePropTypes).isRequired,
};

export default LBlockAddFormItem;
