import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import MenuIcon from 'react-icons/lib/md/menu';
import css from './index.css';
import HideOnScroll from 'decorators/HideOnScroll';

class TopToolbar extends Component {
  render() {
    const { enable, toggleMenu, t } = this.props;
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="animation"
        transitionEnterTimeout={TRANSITION_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_TIMEOUT}
      >
      { enable &&
        <HideOnScroll>
          <div className={css.leftButtonsGroup}>
            <div className={css.buttonItem}>
              <BubbleIcon onClick={toggleMenu} isBlank>
                <MenuIcon />
              </BubbleIcon>
            </div>
          </div>
          <div className={css.rightButtonsGroup}>
            <div className={css.buttonItem}><BubbleIcon isBlank onClick={this.onClick} text={t('preview')} /></div>
            <div className={css.buttonItem}><BubbleIcon isBlank onClick={this.onClick} text={t('publicate')} /></div>
          </div>
        </HideOnScroll>
        }
      </ReactCSSTransitionGroup>
    );
  }
}

TopToolbar.propTypes = {
  t: PropTypes.func.isRequired,
  enable: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default translate('top_toolbar')(TopToolbar);
