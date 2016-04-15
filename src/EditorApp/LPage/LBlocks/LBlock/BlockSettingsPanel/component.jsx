import React, { Component, PropTypes } from 'react';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ListItem from 'material-ui/List/ListItem';
import IconUp from 'material-ui/svg-icons/navigation/arrow-upward';
import IconDown from 'material-ui/svg-icons/navigation/arrow-downward';
import IconRemove from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconForm from 'material-ui/svg-icons/action/description';
import IconBackground from 'material-ui/svg-icons/image/panorama';
import IconViews from 'material-ui/svg-icons/action/view-carousel';
import IconAttributes from 'material-ui/svg-icons/action/extension';

import Divider from 'material-ui/Divider';

import LBlockSettingsButton from './LBlockSettingsButton';
import partial from 'lodash/partial';

class BlockSettingsPanel extends Component {
  constructor(props) {
    super(props);
    const { block } = props;
    const { uuid } = block;

    this.onEditingStart = partial(props.onEditingStart, block);
    this.onViewSwitchNext = partial(props.onViewSwitchNext, uuid);
    this.onBlockPositionUp = partial(props.onBlockPositionUp, uuid);
    this.onBlockPositionDown = partial(props.onBlockPositionDown, uuid);

    this.onDelete = partial(props.onDelete, uuid);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      open: false,
      anchorEl: undefined,
    };
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const {
      enable, block,
      schema,
      hasMultipleViews,
      enableMoveDown, enableMoveUp,

    } = this.props;

    if (!enable) {
      return (<noscript />);
    }

    return (
      <LBlockSettingsButton ref="button" onClick={this.open}>
        <Popover
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          open={this.state.open}
          canAutoPosition
          autoCloseWhenOffScreen
          onRequestClose={this.close}
          useLayerForClickAway
        >
				<Menu animateOpen onItemTouchTap={this.close}>
					<MenuItem value="edit_content" primaryText="Изменить текст" leftIcon={<IconEdit />} onTouchTap={this.onEditingStart} />
					<MenuItem primaryText="Изменить форму" leftIcon={<IconForm />} onTouchTap={this.onEditingStart} disabled={!schema.form} />
					<MenuItem primaryText="Установить фон" leftIcon={<IconBackground />} onTouchTap={this.onEditingStart} disabled={!schema.backgroundImage} />
					<ListItem primaryText="Свойства блока" leftIcon={<IconAttributes />} secondaryText={block.viewName} onTouchTap={this.onEditingStart} />
					<Divider />
					<MenuItem primaryText="Сменить вид" leftIcon={<IconViews />} onTouchTap={this.onViewSwitchNext} disabled={!hasMultipleViews} />
					<MenuItem primaryText="Переместить выше" leftIcon={<IconUp />} onTouchTap={this.onBlockPositionUp} disabled={!enableMoveUp} />
					<MenuItem primaryText="Переместить ниже" leftIcon={<IconDown />} onTouchTap={this.onBlockPositionDown} disabled={!enableMoveDown} />
					<MenuItem primaryText="Удалить" value="del" leftIcon={<IconRemove />} onTouchTap={this.onDelete} />
				</Menu>
			</Popover>
    </LBlockSettingsButton>
    );
  }
}

BlockSettingsPanel.propTypes = {
  block: PropTypes.object.isRequired,
  enable: PropTypes.bool.isRequired,

  schema: PropTypes.object.isRequired,

  onEditingStart: PropTypes.func.isRequired,

  onViewSwitchNext: PropTypes.func.isRequired,

  onBlockPositionUp: PropTypes.func,
  onBlockPositionDown: PropTypes.func,

  hasMultipleViews: PropTypes.bool.isRequired,

  enableMoveDown: PropTypes.bool.isRequired,
  enableMoveUp: PropTypes.bool.isRequired,

  onDelete: PropTypes.func.isRequired,
};

export default BlockSettingsPanel;
