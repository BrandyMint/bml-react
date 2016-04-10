import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';
import partial from 'lodash/partial';
import config from 'constants/config';
import { ThemesRepo } from 'constants/themes';
import { Link } from 'react-router';

import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import FlatButton from 'material-ui/lib/flat-button';

import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';

import SelectField from 'material-ui/lib/select-field';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import IconBack from 'material-ui/lib/svg-icons/navigation/menu';
import IconAdd from 'material-ui/lib/svg-icons/action/view-day';
import IconSave from 'material-ui/lib/svg-icons/content/save';
import IconDevice from 'material-ui/lib/svg-icons/action/important-devices';
import IconBlocks from 'material-ui/lib/svg-icons/av/playlist-play';

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
     changeTheme, isMenuOpen, toggleMenu, closeMenu,} = this.props;

     const previewUrl = `/editor/${variantUuid}/mobilePreview`;

     const prev = partial(this.context.router.push, previewUrl);

     const goPreview = () => {
       closeMenu();
       prev();
     }

  const theme = ThemesRepo.find(theme_name);

  const nextTheme = ThemesRepo.findNext(theme_name);

  const onChangeTheme = (event) => changeTheme(nextTheme.name);

    return (
			 <LeftNav
					docked={false}
					width={250}
					open={isMenuOpen}
					onRequestChange={toggleMenu}
				>
          <MenuItem onTouchTap={closeMenu} primaryText="&nbsp;" rightIcon={<IconBack />} />
          <Divider />
          <MenuItem primaryText="Сохранить" leftIcon={<IconSave />} />
          <Divider />
					<MenuItem primaryText="Предпросмотр" onTouchTap={goPreview} leftIcon={<IconDevice />} />
					<MenuItem primaryText="Блоки" leftIcon={<IconBlocks />} />
					<ListItem
						primaryText="Формы"
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem
								key={1}
								primaryText="Форма 1"
							/>,
							<ListItem
								key={2}
								primaryText="Форма 2"
							/>,
							<ListItem
								key={3}
								primaryText="Добавить новую"
							/>,
						]}
					/>

					<ListItem
						primaryText="Внешний вид"
						primaryTogglesNestedList={true}
						nestedItems={[
              <ListItem key={1}
                primaryText="Узкий"
                onTouchTap={switchBoxedLayout}
                rightToggle={<Toggle onTouchTap={partial(switchBoxedLayout, !is_boxed)} toggled={is_boxed}/>} />,
							<ListItem key={2}
                primaryText="Сменить тему"
                secondaryText={theme.color}
                onTouchTap={onChangeTheme}
							/>
						]}
					/>

        <Divider />
        <MenuItem primaryText="Заявки" href={config('exitUrl')} leftIcon={<IconBack />} />
			</LeftNav>
	);
}
}

LeftPanelMenu.propTypes = {
  t: PropTypes.func.isRequired,
  theme_name: PropTypes.string.isRequired,
  is_boxed: PropTypes.bool.isRequired,

toggleMenu: PropTypes.func.isRequired,
closeMenu: PropTypes.func.isRequired,
changeTheme: PropTypes.func.isRequired,
switchBoxedLayout: PropTypes.func.isRequired,

  isMenuOpen: PropTypes.bool.isRequired,
};

export default translate('left_panel_menu')(LeftPanelMenu);
