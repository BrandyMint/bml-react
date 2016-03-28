import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

import Icon from 'react-icons/lib/md/shuffle';

import './LBlockViewChanger.css';

class LBlockViewChanger extends Component {
  render() {
    const { t, onViewSwitchNext } = this.props;

    return (
        <div className="LBlockViewChanger">
          <div data-tip={t('tips:change_block_view')}>
            <BubbleIcon onClick={onViewSwitchNext}>
              <Icon />
            </BubbleIcon>
          </div>
        </div>
    );
  }
}

LBlockViewChanger.propTypes = {
  t: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  // onViewSwitchPrev: PropTypes.func.isRequired,
};

export default translate('')(LBlockViewChanger);
