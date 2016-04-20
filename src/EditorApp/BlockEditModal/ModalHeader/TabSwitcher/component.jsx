import React, { Component, PropTypes } from 'react';
import invariant from 'invariant';
import { translate } from 'react-i18next';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { viewsRepository } from 'repositories/ViewsRepository';

import { CONTENT_TAB, FORM_TAB, BACKGROUND_TAB, NODEATTRIBUTES_TAB } from 'actions/editBlockForm';

class TabSwitcher extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getSchema() {
    const { viewName } = this.props;
    const schema = viewsRepository.getContentSchemaByViewName(viewName);
    invariant(schema, `No schema for block ${viewName}`);
    return schema;
  }

  handleChange(event, index, value) { this.props.switchTab(value); }

  render() {
    const { tab } = this.props;

    const schema = this.getSchema();
    const hasForm = schema.form;
    const hasBackground = schema.backgroundImage;

    // TODO I18n
    return (
      <DropDownMenu value={tab} onChange={this.handleChange}>
        <MenuItem primaryText="Редактор текста" value={CONTENT_TAB}  />
        <MenuItem primaryText="Редактор формы" value={FORM_TAB}  disabled={!hasForm}  />
        <MenuItem primaryText="Установка фона" value={BACKGROUND_TAB}  disabled={!hasBackground} />
        <MenuItem primaryText="Якорь элемента" value={NODEATTRIBUTES_TAB} />
      </DropDownMenu>
    );
  }
}

TabSwitcher.propTypes = {
  t: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
  switchTab: PropTypes.func.isRequired,
  viewName: PropTypes.string.isRequired,
};

TabSwitcher.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default translate('')(TabSwitcher);
