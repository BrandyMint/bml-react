import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';
import partial from 'lodash/partial';
import config from 'constants/config';
import { ThemesRepo } from 'constants/themes';

import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';

import Divider from 'material-ui/lib/divider';

import IconMenu     from 'material-ui/lib/svg-icons/navigation/menu';

import IconBack from 'material-ui/lib/svg-icons/communication/contacts';
import IconPhone from 'material-ui/lib/svg-icons/hardware/phone-android';
import IconStyle from 'material-ui/lib/svg-icons/image/style';

import SaveMenuItem from './SaveMenuItem';

class LeftPanelMenu extends Component {
  //shouldComponentUpdate(nextProps, nextState) {
    //// Продиводействуем внешним изменениям. Потому что во время редактирования блока
    //// меняется только то, что мы меняем в блоке
    //return this.state !== nextState || nextProps.isMenuOpen !== this.props.isVisible;
  //}
	static contextTypes = {
		router: React.PropTypes.object.isRequired,
  };

  render () {
    const { t,
      theme_name,
      variantUuid,
      is_boxed,
      switchBoxedLayout,
      changeTheme, isMenuOpen, toggleMenu, closeMenu,
    } = this.props;

    const previewUrl = `/editor/${variantUuid}/mobilePreview`;

    const prev = partial(this.context.router.push, previewUrl);

    const goPreview = () => {
      closeMenu();
      prev();
    }

    const theme = ThemesRepo.find(theme_name);

    const nextTheme = ThemesRepo.findNext(theme_name);

    const onChangeTheme = () => changeTheme(nextTheme.name);

    return (
      <LeftNav
        docked={false}
        width={250}
        open={isMenuOpen}
        onRequestChange={toggleMenu}
      >
        <MenuItem onTouchTap={closeMenu} primaryText="&nbsp;" rightIcon={<IconMenu />} />
        <Divider />
        <SaveMenuItem />
        <MenuItem primaryText={t('preview')} onTouchTap={goPreview} leftIcon={<IconPhone />} />
        <MenuItem primaryText={t('wide')} onTouchTap={partial(switchBoxedLayout, !is_boxed)} checked={!is_boxed}  insetChildren />
        <MenuItem
          leftIcon={<IconStyle />}
          primaryText={t('change_theme')}
          secondaryText={theme.color}
          onTouchTap={onChangeTheme}
        />

        <Divider />
        <MenuItem primaryText={t('data')} href={config('exitUrl')} leftIcon={<IconBack />} />
      </LeftNav>
    );
  }
}

LeftPanelMenu.propTypes = {
  t: PropTypes.func.isRequired,
  theme_name: PropTypes.string.isRequired,
  is_boxed: PropTypes.bool.isRequired,

  variantUuid: PropTypes.string.isRequired,

  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  switchBoxedLayout: PropTypes.func.isRequired,

  isMenuOpen: PropTypes.bool.isRequired,
};

export default translate('left_panel_menu')(LeftPanelMenu);
