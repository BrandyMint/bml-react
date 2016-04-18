import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

// import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/cancel';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import PopoverMenu from './PopoverMenu';
import TabSwitcher from './TabSwitcher';
import ExpandIcon from './ExpandIcon';

class ModalHeader extends Component {
  render() {
    const { t, viewName, uuid, onClose, onSubmit } = this.props;
    const title = t('title', { name: viewName });
    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <ExpandIcon />
          <ToolbarTitle text={title} />
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <TabSwitcher uuid={uuid} />
          <ToolbarSeparator />
          <IconButton onTouchTap={onClose} tooltip='Отменить изменения и скрыть панель'><NavigationClose /></IconButton>
          <IconButton onTouchTap={onSubmit} tooltip='Применить изменения и скрыть панель'><CheckIcon /></IconButton>
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

ModalHeader.propTypes = {
  t: PropTypes.func.isRequired,
  viewName: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default translate('block_edit_modal')(ModalHeader);
