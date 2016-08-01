import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import MenuIcon from 'react-icons/lib/md/menu';
import css from './index.css';
import HideOnScroll from 'decorators/HideOnScroll';

class TopToolbar extends Component {
  render() {
    const { enable, toggleMenu, t } = this.props;
    if (!enable) {
      return <noscript />;
    }
    return (
      <HideOnScroll>
        <div className={css.leftButtonsGroup} styleName={css.buttonsGroup}>
          <div className={css.buttonItem}>
            <BubbleIcon onClick={toggleMenu} isBlank>
              <MenuIcon />
            </BubbleIcon>
          </div>
        </div>
        <div className={css.rightButtonsGroup} styleName={css.buttonsGroup}>
          <div className={css.buttonItem}><BubbleIcon isBlank onClick={this.onClick} text={t('preview')} /></div>
          <div className={css.buttonItem}><BubbleIcon isBlank onClick={this.onClick} text={t('publicate')} /></div>
        </div>
      </HideOnScroll>
    );
  }
}

TopToolbar.propTypes = {
  t: PropTypes.func.isRequired,
  enable: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default translate('top_toolbar')(TopToolbar);
