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
  }

  onClick() {
    const { deleteEditingBlock, block } = this.props;
    deleteEditingBlock(block.uuid);
  }

  render() {
    const { t, fixed, enable } = this.props;

    if (!enable) {
      return (<noscript />);
    }

    // const text=t('tips:block_settings');
    const text=t('tips:delete_block');
    return (
      <div className="LBlockSettingsButton" style={fixed ? FIXED_STYLE : {}}>
        <BubbleIcon onClick={this.onClick} text={text}>
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

  startEditingBlock: PropTypes.func.isRequired,
  deleteEditingBlock: PropTypes.func.isRequired,
};

export default translate('')(BlockSettingsPanel);
