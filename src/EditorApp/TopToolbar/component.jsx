import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import MenuIcon from 'react-icons/lib/md/menu';
import css from './index.css';
import HideOnScroll from 'decorators/HideOnScroll';
import { Link } from 'react-router';

import { DESKTOP_PREVIEW_MODE, MOBILE_PREVIEW_MODE, EDIT_MODE } from './modes';

class TopToolbar extends Component {
  render() {
    const { mode, variantUuid, enable, toggleMenu, t } = this.props;
    const previewUrl = mode === DESKTOP_PREVIEW_MODE ? `/editor/${variantUuid}/mobilePreview` : `/editor/${variantUuid}/preview`;
    const previewTitle = mode === DESKTOP_PREVIEW_MODE ? 'mobile_preview' : 'preview'

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
              { mode === EDIT_MODE &&
                <BubbleIcon onClick={toggleMenu} isBlank>
                  <MenuIcon />
                </BubbleIcon>
              }
            </div>
          </div>
          <div className={css.rightButtonsGroup}>
            { mode !== EDIT_MODE &&
              <Link to={`/editor/${variantUuid}`} className={ css.buttonItem }>
                <BubbleIcon isBlank text={t('edit_page')} />
              </Link>
            }
            <Link to={previewUrl} className={ css.buttonItem }>
              <BubbleIcon isBlank text={t(previewTitle)} />
            </Link>
            <div className={css.buttonItem}><BubbleIcon isBlank text={t('publicate')} /></div>
          </div>
        </HideOnScroll>
        }
      </ReactCSSTransitionGroup>
    );
  }
}

TopToolbar.defaultProps = {
  mode: EDIT_MODE,
}

TopToolbar.propTypes = {
  t: PropTypes.func.isRequired,
  enable: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  variantUuid: PropTypes.string.isRequired,
  mode: React.PropTypes.oneOf([DESKTOP_PREVIEW_MODE, MOBILE_PREVIEW_MODE, EDIT_MODE]),
};

export default translate('top_toolbar')(TopToolbar);
