import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
// import FaCog from 'react-icons/lib/fa/cog';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import css from './index.css';
import ImageIcon from 'react-icons/lib/md/image';
import DeleteIcon from 'react-icons/lib/md/delete';
import DownIcon from 'react-icons/lib/md/arrow-downward';
import UpIcon from 'react-icons/lib/md/arrow-upward';

const FIXED_STYLE = {
  position: 'fixed',
}

class SettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { deleteEditingBlock, block } = this.props;
    if (confirm(this.props.t('confirm_delete'))) {
      deleteEditingBlock(block.uuid);
    }
  }

  render() {
    const { t, fixed, enable, isOpen } = this.props;

    //if (!enable) {
      //return (<noscript />);
    //}

    const text=t('delete_block');
    return (
      <div className={css.panel}>
        <div className={css.menuItem}><ImageIcon /> Image</div>
        <div className={css.menuItem}><UpIcon /> Move </div>
        <div className={css.menuItem}><DownIcon /> Move</div>
        <div className={css.menuItem}><DeleteIcon /> Delete</div>
      </div>
    );
  }
}

SettingsPanel.propTypes = {
  t: PropTypes.func.isRequired,
  fixed: PropTypes.bool.isRequired,
  enable: PropTypes.bool.isRequired,
  block: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPanelSettingsOpen: PropTypes.func.isRequired,
  deleteEditingBlock: PropTypes.func.isRequired,
};

export default translate('block_settings_panel')(SettingsPanel);
