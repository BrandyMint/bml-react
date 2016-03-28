import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

import './LBlockSettingsButton.css';

import FaCog from 'react-icons/lib/fa/cog';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

class LBlockSettingsButton extends Component {
  render() {
    const { t, onEditingStart } = this.props;

    return (
        <div className="LBlockSettingsButton">
          <div data-tip={t('tips:block_settings')}>
            <BubbleIcon onClick={onEditingStart}>
              <FaCog />
            </BubbleIcon>
          </div>
        </div>
    );
  }
}

LBlockSettingsButton.propTypes = {
  t: PropTypes.func.isRequired,
  onEditingStart: PropTypes.func.isRequired,
};

export default translate('')(LBlockSettingsButton);
