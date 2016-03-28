import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';
import classnames from 'classnames';

import partial from 'lodash/partial';

import PlusIcon from 'react-icons/lib/fa/plus';

import './LBlockAddButton.css';

const LBlockAddButton = ({
  t,
  onAddBlock,
  index,
  enable,
  blocksCount,
}) => {
  if (!enable) { return false; }

  const classes = classnames(
    'LBlockAddButton',
    { 'LBlockAddButton--last': blocksCount === index }
  );

  return (
    <div className={classes}>
      <div
        className="LBlockAddButton-handle"
        data-multiline
        data-tip={t('tips:add_button')}
        onClick={partial(onAddBlock, index)}
      >
        <PlusIcon className="Icon" />
      </div>
    </div>
  );
};

LBlockAddButton.propTypes = {
  t: PropTypes.func.isRequired,
  onAddBlock: PropTypes.func.isRequired,
  index: PropTypes.number,
  blocksCount: PropTypes.number.isRequired,
  enable: PropTypes.bool.isRequired,
};

LBlockAddButton.defaultProps = {
  enable: true,
};

export default translate('')(LBlockAddButton);
