import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import MenuItem from 'material-ui/MenuItem';
import ListItem from 'material-ui/List/ListItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconForm from 'material-ui/svg-icons/action/description';
import IconBackground from 'material-ui/svg-icons/image/panorama';
import IconAttributes from 'material-ui/svg-icons/action/extension';

import { CONTENT_TAB, FORM_TAB, BACKGROUND_TAB, NODEATTRIBUTES_TAB } from 'actions/editBlockForm';

class TabSwitcher extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) { this.props.switchTab(value); }

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
      <DropDownMenu value={tab} onChange={this.handleChange}>
        <MenuItem primaryText="Редактор текста" value={CONTENT_TAB}  />
        <MenuItem primaryText="Редактор формы" value={FORM_TAB}  disabled={!hasForm}  />
        <MenuItem primaryText="Установка фона" value={BACKGROUND_TAB}  disabled={!hasBackground} />
        <MenuItem primaryText="Якорь элемента" value={NODEATTRIBUTES_TAB}  secondaryText={viewName} />
      </DropDownMenu>
    );
  }
};

TabSwitcher.propTypes = {
  t: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
  switchTab: PropTypes.func.isRequired,
};

TabSwitcher.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default translate('')(TabSwitcher);