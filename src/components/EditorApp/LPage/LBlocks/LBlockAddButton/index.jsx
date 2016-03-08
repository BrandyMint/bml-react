import './LBlockAddButton.css';

import React, { PropTypes } from 'react';

import PlusIcon from 'react-icons/lib/fa/plus';

const LBlockAddButton = ({ onClick, onMouseEnter, onMouseLeave }) => (
  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="LBlockAddButton">
    <div className="LBlockAddButton-handle" onClick={onClick}>
      <PlusIcon className="Icon"/>
    </div>
  </div>
);

LBlockAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LBlockAddButton;
