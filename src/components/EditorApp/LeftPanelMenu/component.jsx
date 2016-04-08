import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';
import config from 'constants/config';

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

import IconBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
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

 render () {
   const { t, isMenuOpen, toggleMenu, closeMenu } = this.props;

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
					<MenuItem primaryText="Предпросмотр" leftIcon={<IconDevice />} />
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
								key={2}
								primaryText="Добавить новую"
							/>,
						]}
					/>

					<ListItem
						primaryText="Внешний вид"
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem primaryText="Широкая" rightToggle={<Toggle />} />,
							<ListItem
								key={2}
								primaryText="Цвет"
								rightIcon={
									<IconMenu
										iconButtonElement={<MoreVertIcon />}
										anchorOrigin={{horizontal: 'left', vertical: 'top'}}
										targetOrigin={{horizontal: 'left', vertical: 'top'}}
									>
										<MenuItem primaryText="Refresh" />
										<MenuItem primaryText="Send feedback" />
										<MenuItem primaryText="Settings" />
										<MenuItem primaryText="Help" />
										<MenuItem primaryText="Sign out" />
									</IconMenu>
									}
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

toggleMenu: PropTypes.func.isRequired,
closeMenu: PropTypes.func.isRequired,

  isMenuOpen: PropTypes.bool.isRequired,
};

export default translate('left_panel_menu')(LeftPanelMenu);
