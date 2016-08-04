import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
// import FaCog from 'react-icons/lib/fa/cog';
// import Icon from 'react-icons/lib/md/more';
import Icon from 'react-icons/lib/md/more-vert';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import css from './index.css';

const FIXED_STYLE = {
  position: 'fixed',
}

class SettingsButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isOpen, block } = this.props;
    this.props.onPanelSettingsOpen(isOpen ? null : block);
  }

  render() {
    const { t, fixed, enable, isOpen, block } = this.props;

    if (!enable) {
      return (<noscript />);
    }

    const text=t('delete_block');
    return (
      <div
        className={css.button}
        style={fixed ? FIXED_STYLE : {}}
      >
        <BubbleIcon isBlank isActive={isOpen} onClick={this.onClick}>
          <Icon />
        </BubbleIcon>
      </div>
    );
  }
}

SettingsButton.propTypes = {
  t: PropTypes.func.isRequired,
  fixed: PropTypes.bool.isRequired,

  enable: PropTypes.bool.isRequired,
  block: PropTypes.object.isRequired,

  isOpen: PropTypes.bool.isRequired,

  onPanelSettingsOpen: PropTypes.func.isRequired,

  deleteEditingBlock: PropTypes.func.isRequired,
};

export default translate('block_settings_panel')(SettingsButton);
