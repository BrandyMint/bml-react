import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
// import FaCog from 'react-icons/lib/fa/cog';
import DeleteIcon from 'react-icons/lib/md/delete';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import './index.scss';

const FIXED_STYLE = {
  position: 'fixed',
}

class BlockSettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  onEnter() {
    this.props.onPanelSettingsOpen(true);
  }

  onLeave() {
    this.props.onPanelSettingsOpen(false);
  }

  onClick() {
    const { deleteEditingBlock, block } = this.props;
    if (confirm(this.props.t('confirm_delete'))) {
      deleteEditingBlock(block.uuid);
    }
  }

  render() {
    const { t, fixed, enable, isOpen } = this.props;

    if (!enable) {
      return (<noscript />);
    }

    const text=t('delete_block');
    return (
      <div
        className="LBlockSettingsButton"
        style={fixed ? FIXED_STYLE : {}}
        onMouseOver={this.onEnter}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
        <BubbleIcon onClick={this.onClick} text={isOpen ? text : ''}>
          <DeleteIcon />
        </BubbleIcon>
      </div>
    );
  }
}

BlockSettingsPanel.propTypes = {
  t: PropTypes.func.isRequired,
  fixed: PropTypes.bool.isRequired,

  enable: PropTypes.bool.isRequired,
  block: PropTypes.object.isRequired,

  isOpen: PropTypes.bool.isRequired,

  onPanelSettingsOpen: PropTypes.func.isRequired,

  deleteEditingBlock: PropTypes.func.isRequired,
};

export default translate('block_settings_panel')(BlockSettingsPanel);
