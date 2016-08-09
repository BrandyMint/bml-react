import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
// import FaCog from 'react-icons/lib/fa/cog';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import css from './index.css';
import ImageIcon from 'react-icons/lib/md/image';
import DeleteIcon from 'react-icons/lib/md/delete';
import DownIcon from 'react-icons/lib/md/arrow-downward';
import UpIcon from 'react-icons/lib/md/arrow-upward';

class SettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    const { deleteEditingBlock, block } = this.props;
    if (confirm(this.props.t('confirm_delete'))) {
      deleteEditingBlock(block.uuid);
    }
  }

  render() {
    const { t, isOpen } = this.props;

    console.log(css);

    const text=t('delete_block');
    return (
      <div className={css.panel}>
        <div className={css.menuItem} onClick={this.onClickDelete}>
          <div className={css.menuItemIcon}><DeleteIcon /></div>
          <div className={css.menuItemText}>Delete</div>
        </div>
        <div className={css.menuItem}>
          <div className={css.menuItemIcon}><ImageIcon /></div>
          <div className={css.menuItemText}>Image</div>
        </div>
        <div className={css.menuItem}>
          <div className={css.menuItemIcon}><UpIcon /></div>
          <div className={css.menuItemText}>Move Up</div>
        </div>
        <div className={css.menuItem}>
          <div className={css.menuItemIcon}><DownIcon /></div>
          <div className={css.menuItemText}>Move Down</div>
        </div>
      </div>
    );
  }
}

SettingsPanel.propTypes = {
  t: PropTypes.func.isRequired,
  block: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPanelSettingsOpen: PropTypes.func.isRequired,
  deleteEditingBlock: PropTypes.func.isRequired,
};

export default translate('block_settings_panel')(SettingsPanel);
