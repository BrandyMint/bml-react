import './LBlockAddFormItem.css';

import React, { PropTypes } from 'react';

const LBlockAddFormItem = ({ example, onAdd }) => {
  const { title, viewName } = example;

  const onClick = () => onAdd(example);

  return (
    <div className="LBlockAddFormItem" onClick={onClick}>
      <h5 className="LBlockAddFormItem-title">{title || viewName}</h5>
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
