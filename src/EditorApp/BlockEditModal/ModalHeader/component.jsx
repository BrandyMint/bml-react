import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import PopoverMenu from './PopoverMenu';

import TabSwitcher from './TabSwitcher';

import ExpandIcon from './ExpandIcon';

class ModalHeader extends Component {
  render() {
    const { t, viewName, uuid, onClose } = this.props;
    const title = (
      <div>
        <span>{t('title', { name: viewName })}</span>
        <TabSwitcher uuid={uuid} />
      </div>);

      // <PopoverMenu uuid={uuid} /> }
    return (
      <AppBar
        title={title}
        iconElementLeft={<IconButton onTouchTap={onClose}><NavigationClose /></IconButton>}
        iconElementRight={ <ExpandIcon />}
      />);
  }
}

ModalHeader.propTypes = {
  t: PropTypes.func.isRequired,
  viewName: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default translate('block_edit_modal')(ModalHeader);
