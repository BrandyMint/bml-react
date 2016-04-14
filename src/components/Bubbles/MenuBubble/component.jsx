import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import MenuIcon from 'react-icons/lib/md/menu';
import SuperBubble from 'components/ui-elements/SuperBubble';

class MenuBubble extends Component {
  render() {
    const { t, toggleMenu } = this.props;

    const onClick = (event) => {
      event.preventDefault();
      toggleMenu();
      return false;
    };

    return (<div>
      <a
        href="#"
        onClick={onClick}
        data-tip={t('tips:menu')}
        className="IconLink"
      >
        <SuperBubble>
          <MenuIcon className="SuperBubble--icon" />
        </SuperBubble>
      </a>
    </div>
    );
  }
}

MenuBubble.propTypes = {
  t: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default translate('')(MenuBubble);
