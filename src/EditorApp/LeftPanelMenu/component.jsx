import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';
import partial from 'lodash/partial';
import config from 'constants/config';
import { ThemesRepo } from 'constants/themes';

import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import Divider from 'material-ui/Divider';

import IconMenu     from 'material-ui/svg-icons/navigation/menu';

import IconExit from 'material-ui/svg-icons/action/exit-to-app';
import IconPhone from 'material-ui/svg-icons/hardware/phone-android';
import IconStyle from 'material-ui/svg-icons/image/style';

import ListItem from 'material-ui/List/ListItem';

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
      <Drawer
        docked={false}
        width={290}
        open={isMenuOpen}
        onRequestChange={toggleMenu}
      >
      <MenuItem onTouchTap={closeMenu} primaryText="&nbsp;" rightIcon={<IconMenu />} />
        <Divider />
        <ListItem primaryText={t('preview')} secondaryText={t('preview_hint')} onTouchTap={goPreview} leftIcon={<IconPhone />} />
        <MenuItem primaryText={t('wide')} onTouchTap={partial(switchBoxedLayout, !is_boxed)} checked={!is_boxed}  insetChildren />
        <MenuItem
          leftIcon={<IconStyle />}
          primaryText={t('change_theme')}
          secondaryText={theme.color}
          onTouchTap={onChangeTheme}
        />

        <Divider />
        <SaveMenuItem />
        <Divider />
        <ListItem secondaryText={t('data')} primaryText={t('exit')} href={config('exitUrl')} leftIcon={<IconExit />} />
      </Drawer>
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
