import React, { PropTypes, Component } from 'react';

import { red500 } from 'material-ui/lib/styles/colors';
import ListItem from 'material-ui/lib/lists/list-item';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconSave from 'material-ui/lib/svg-icons/content/save';
import IconFace from 'material-ui/lib/svg-icons/action/face';
import IconProcess from 'material-ui/lib/svg-icons/action/update';
import { translate } from 'react-i18next';

class SaveMenuItem extends Component {
  constructor(props) {
    super(props);
    this.onSaveChanges = this.onSaveChanges.bind(this);
  }

  onSaveChanges(event) {
    event.preventDefault();
    this.props.onSaveChanges();
    return false;
  }

  render() {
    const { t, isSaving, hasUnsavedChanges } = this.props;
    // const tooltip = t('tips:have_changes');

    if (isSaving) {
      const title = t('saving');
      return (<MenuItem primaryText={title} leftIcon={<IconProcess />} />);
    }

    const title = t('save');

    if (hasUnsavedChanges) {
      return (
        <MenuItem onTouchTap={this.onSaveChanges} primaryText={title} leftIcon={<IconSave color={red500} />} />
      );
    }

    return (
      <ListItem primaryText="Нет изменений" leftIcon={<IconFace />} />
    );
  }
}

SaveMenuItem.propTypes = {
  t: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
};

export default translate('save_menu_item')(SaveMenuItem);
