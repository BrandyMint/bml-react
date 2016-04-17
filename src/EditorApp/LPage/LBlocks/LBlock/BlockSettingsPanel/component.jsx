import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import FaCog from 'react-icons/lib/fa/cog';
import BubbleIcon from 'components/ui-elements/BubbleIcon';
import partial from 'lodash/partial';
import './index.scss';

const FIXED_STYLE = {
  position: 'fixed',
}

class BlockSettingsPanel extends Component {
  constructor(props) {
    super(props);
    const { block } = props;
    const { uuid } = block;

    this.onStartContentEditing = partial(props.onStartContentEditing, block);
    this.onViewSwitchNext = partial(props.onViewSwitchNext, uuid);
    this.onBlockPositionUp = partial(props.onBlockPositionUp, uuid);
    this.onBlockPositionDown = partial(props.onBlockPositionDown, uuid);

    this.onDelete = partial(props.onDelete, uuid);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      open: false,
      anchorEl: null,
    };
  }

  //componentDidMount() {
    //this.setState({ anchorEl: findDOMNode(this) });
  //}

  open() {
    this.onStartContentEditing();
    // this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { t, fixed, enable } = this.props;

    if (!enable) {
      return (<noscript />);
    }

    let style = {};

    if (fixed) {
      style = FIXED_STYLE;
    }

    return (
      <div className="LBlockSettingsButton" style={style}>
        <BubbleIcon onClick={this.open} text={t('tips:block_settings')}>
          <FaCog />
        </BubbleIcon>
      </div>
    );
  }
}

BlockSettingsPanel.propTypes = {
  t: PropTypes.func.isRequired,
  fixed: PropTypes.bool.isRequired,

  block: PropTypes.object.isRequired,
  enable: PropTypes.bool.isRequired,

  schema: PropTypes.object.isRequired,

  onStartContentEditing: PropTypes.func.isRequired,

  onViewSwitchNext: PropTypes.func.isRequired,

  onBlockPositionUp: PropTypes.func,
  onBlockPositionDown: PropTypes.func,

  hasMultipleViews: PropTypes.bool.isRequired,

  enableMoveDown: PropTypes.bool.isRequired,
  enableMoveUp: PropTypes.bool.isRequired,

  onDelete: PropTypes.func.isRequired,
};

export default translate('')(BlockSettingsPanel);
