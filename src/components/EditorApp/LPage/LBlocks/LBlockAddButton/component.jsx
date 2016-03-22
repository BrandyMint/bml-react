import React, { PropTypes } from 'react';
import partial from 'lodash/partial';

import PlusIcon from 'react-icons/lib/fa/plus';

import './LBlockAddButton.css';

const LBlockAddButton = ({ onAddBlock, index }) => (
  <div className="LBlockAddButton">
    <div
      className="LBlockAddButton-handle"
      data-multiline
      data-tip="Нажмите чтобы выбрать и<br>добавить сюда новый блок"
      onClick={partial(onAddBlock, index)}
    >
      <PlusIcon className="Icon"/>
    </div>
  </div>
);

LBlockAddButton.propTypes = {
  onAddBlock: PropTypes.func.isRequired,
  index: PropTypes.number,
};

export default LBlockAddButton;
