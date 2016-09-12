import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
// import FaCog from 'react-icons/lib/fa/cog';
import css from './index.css';
// import ImageIcon from 'react-icons/lib/md/image';
import DeleteIcon from 'react-icons/lib/md/delete';
import DownIcon from 'react-icons/lib/md/arrow-downward';
import UpIcon from 'react-icons/lib/md/arrow-upward';
import FormIcon from 'react-icons/lib/fa/book';
import NextIcon from 'react-icons/lib/fa/fast-forward';
import SettingsIcon from 'react-icons/lib/md/settings'
import partial from 'lodash/partial';

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
    const { t, block, hasForm, enableMoveDown, enableMoveUp, hasMultipleViews} = this.props;
    const { uuid } = block;

    return (
      <div className={css.panel}>
        <div className={css.menuItem} onClick={this.onClickDelete}>
          <div className={css.menuItemIcon}><DeleteIcon /></div>
          <div className={css.menuItemText}>{t('delete_block')}</div>
        </div>
        { hasMultipleViews &&
          <div className={css.menuItem} onClick={partial(this.props.switchNextView, uuid)}>
            <div className={css.menuItemIcon}><NextIcon /></div>
            <div className={css.menuItemText}>{t('next')}</div>
          </div>
        }
        { enableMoveUp &&
          <div className={css.menuItem} onClick={partial(this.props.upBlockPosition, uuid)}>
            <div className={css.menuItemIcon}><UpIcon /></div>
            <div className={css.menuItemText}>{t('move_up')}</div>
          </div>
          }
        { enableMoveDown &&
          <div className={css.menuItem} onClick={partial(this.props.downBlockPosition, uuid)}>
            <div className={css.menuItemIcon}><DownIcon /></div>
            <div className={css.menuItemText}>{t('move_down')}</div>
          </div>
        }
        { hasForm &&
          <div className={css.menuItem} onClick={partial(this.props.startEditingBlock, block)}>
            <div className={css.menuItemIcon}><FormIcon /></div>
            <div className={css.menuItemText}>{t('form')}</div>
          </div>
        }
        {
          <div className={css.menuItem} onClick={partial(this.props.startEditingBlock, block)}>
            <div className={css.menuItemIcon}><SettingsIcon /></div>
            <div className={css.menuItemText}>{t('settings')}</div>
          </div>
        }
      </div>
    );
  }
}

SettingsPanel.propTypes = {
  t: PropTypes.func.isRequired,
  block: PropTypes.object.isRequired,
  hasForm: PropTypes.bool.isRequired,
  hasMultipleViews: PropTypes.bool.isRequired,
  enableMoveUp: PropTypes.bool.isRequired,
  enableMoveDown: PropTypes.bool.isRequired,
  switchNextView: PropTypes.func.isRequired,
  upBlockPosition: PropTypes.func.isRequired,
  downBlockPosition: PropTypes.func.isRequired,
  startEditingBlock: PropTypes.func.isRequired,
  deleteEditingBlock: PropTypes.func.isRequired,
};

export default translate('block_settings_panel')(SettingsPanel);
