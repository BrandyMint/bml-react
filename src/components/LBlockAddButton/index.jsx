import './LBlockAddButton.css';

import React, { PropTypes } from 'react';

import PlusIcon from 'react-icons/fa/plus';

const LBlockAddButton = ({ onClick }) => (
  <div className="LBlockAddButton">
    <div className="LBlockAddButton-handle" onClick={onClick}>
      <PlusIcon className="Icon"/>
    </div>
  </div>
);

LBlockAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LBlockAddButton;
