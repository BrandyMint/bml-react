import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
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
// import FaCog from 'react-icons/lib/fa/cog';
// import FaCog from 'react-icons/lib/md/extension';

// import BubbleIcon from 'components/ui-elements/BubbleIcon';

import { CONTENT_TAB, FORM_TAB, BACKGROUND_TAB, NODEATTRIBUTES_TAB } from 'actions/editBlockForm';

class PopoverMenu extends Component {
  constructor(props) {
    super(props);

    this.switchTabToForm = this.switchTabToForm.bind(this);
    this.switchTabToContent = this.switchTabToContent.bind(this);
    this.switchTabToBackground = this.switchTabToBackground.bind(this);
    this.switchTabToAttributes = this.switchTabToAttributes.bind(this);

    this.onViewSwitchNext = () => {}; //partial(props.onViewSwitchNext, uuid);
    this.onBlockPositionUp = () => {}; // partial(props.onBlockPositionUp, uuid);
    this.onBlockPositionDown = () => {}; //partial(props.onBlockPositionDown, uuid);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() { this.props.onDelete(this.props.uuid); }

  switchTabToContent() { this.props.switchTab(CONTENT_TAB); }
  switchTabToForm() { this.props.switchTab(FORM_TAB); }
  switchTabToBackground() { this.props.switchTab(BACKGROUND_TAB); }
  switchTabToAttributes() { this.props.switchTab(NODEATTRIBUTES_TAB); }

  render() {
    const {
      tab,
      viewName,
      hasForm,
      hasBackground,
      hasMultipleViews,
      enableMoveDown, enableMoveUp,

    } = this.props;

    // TODO I18n
    return (
      <IconMenu
        iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        value={tab}
      >
        <MenuItem primaryText="Редактор текста" value={CONTENT_TAB} leftIcon={<IconEdit />} onTouchTap={this.switchTabToContent}  />
        <MenuItem primaryText="Редактор формы" value={FORM_TAB} leftIcon={<IconForm />} onTouchTap={this.switchTabToForm} disabled={!hasForm}  />
        <MenuItem primaryText="Установка фона" value={BACKGROUND_TAB}
          leftIcon={<IconBackground />} onTouchTap={this.switchTabToBackground} disabled={!hasBackground}
        />
        <ListItem primaryText="Якорь элемента" value={NODEATTRIBUTES_TAB} leftIcon={<IconAttributes />}
          onTouchTap={this.switchTabToAttributes} secondaryText={viewName}
        />
        <Divider />
        <MenuItem primaryText="Сменить вид" leftIcon={<IconViews />} onTouchTap={this.onViewSwitchNext} disabled={!hasMultipleViews} />
        <MenuItem primaryText="Переместить выше" leftIcon={<IconUp />} onTouchTap={this.onBlockPositionUp} disabled={!enableMoveUp} />
        <MenuItem primaryText="Переместить ниже" leftIcon={<IconDown />} onTouchTap={this.onBlockPositionDown} disabled={!enableMoveDown} />
        <MenuItem primaryText="Удалить блок из сайта" leftIcon={<IconRemove />} onTouchTap={this.onDelete} />
      </IconMenu>
    );
  }
}

PopoverMenu.defaultProps = {
  hasForm: true,
  hasBackground: true,
};

PopoverMenu.propTypes = {
  t: PropTypes.func.isRequired,
  viewName: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,

  tab: PropTypes.string.isRequired,

  hasForm: PropTypes.bool.isRequired,
  hasBackground: PropTypes.bool.isRequired,

  switchTab: PropTypes.func.isRequired,

  onViewSwitchNext: PropTypes.func.isRequired,

  onBlockPositionUp: PropTypes.func,
  onBlockPositionDown: PropTypes.func,

  hasMultipleViews: PropTypes.bool.isRequired,

  enableMoveDown: PropTypes.bool.isRequired,
  enableMoveUp: PropTypes.bool.isRequired,

  onDelete: PropTypes.func.isRequired,
};

PopoverMenu.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default translate('')(PopoverMenu);


