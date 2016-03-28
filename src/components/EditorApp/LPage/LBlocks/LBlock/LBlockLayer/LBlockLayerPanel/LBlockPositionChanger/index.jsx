import './LBlockPositionChanger.css';
import { translate } from 'react-i18next';

import React, { PropTypes } from 'react';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

import IconUp from 'react-icons/lib/go/chevron-up';
import IconDown from 'react-icons/lib/go/chevron-down';

const LBlockPositionChanger = ({ t, onBlockPositionUp, onBlockPositionDown }) => (
  <div className="LBlockPositionChanger">
    { onBlockPositionUp &&
      (<span data-tip={t('tips:move_block_up')}>
        <BubbleIcon onClick={onBlockPositionUp}>
          <IconUp />
        </BubbleIcon>
      </span>)
      }
   { onBlockPositionDown &&
      (<span data-tip={t('tips:move_block_down')}>
        <BubbleIcon onClick={onBlockPositionDown}>
          <IconDown />
        </BubbleIcon>
      </span>)
    }
  </div>
);

LBlockPositionChanger.propTypes = {
  t: PropTypes.func.isRequired,
  onBlockPositionDown: PropTypes.func,
  onBlockPositionUp: PropTypes.func,
};

export default translate('')(LBlockPositionChanger);
