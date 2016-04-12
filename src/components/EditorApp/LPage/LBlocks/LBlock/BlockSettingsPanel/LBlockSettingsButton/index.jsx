import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

import './index.scss';

import FaCog from 'react-icons/lib/fa/cog';
// import FaCog from 'react-icons/lib/md/extension';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

class LBlockSettingsButton extends Component {
  render() {
    const { t, onClick, children } = this.props;

    return (
        <div className="LBlockSettingsButton">
          {children}
          <BubbleIcon onClick={onClick} text={t('tips:block_settings')}>
            <FaCog />
          </BubbleIcon>
        </div>
    );
  }
}

LBlockSettingsButton.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default translate('')(LBlockSettingsButton);
