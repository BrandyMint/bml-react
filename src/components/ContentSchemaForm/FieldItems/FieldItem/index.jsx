import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import map from 'lodash/map';
import FlatButton from 'material-ui/FlatButton';
import FieldSubitem, { FieldSubitemPropTypes } from './FieldSubitem';
import RemoveIcon from 'material-ui/svg-icons/content/remove-circle';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const CARD_STYLE = {
  padding: 20,
  margin: 20,
};

class FieldItem extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onChange(fieldKey, value) {
    const { index, onChange } = this.props;
    onChange(index, fieldKey, value);
  }

  onRemove() {
    const { index, onRemove } = this.props;
    onRemove(index);
  }

  render () {
    const { t, index, item, titleKey, subtitleKey, itemSchemaFields } = this.props;

    const title = item[titleKey] || index;
    let subtitle = item[subtitleKey] || index;

    // For example Location of a Map
    if (typeof subtitle === 'object') {
      subtitle = JSON.stringify(subtitle);
    }

    const style = {
      ...CARD_STYLE,
      width: 300,
      display: 'inline-block',
    };

    return (
      <Card style={style}>
        <CardHeader
          title={title}
          subtitle={subtitle}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {
            map(itemSchemaFields, (field, key) => (
              <FieldSubitem
                key={key}
                field={field}
                value={item[field.key]}
                onChange={this.onChange}
              />
            )
           )}
        </CardText>
        <CardActions expandable>
          <FlatButton
            label={t('remove')}
            icon={<RemoveIcon />}
            secondary
            onClick={this.onRemove}
          />
        </CardActions>
     </Card>
    );
  }
}

FieldItem.defaultPropTypes = {
  horizontal: false,
};

FieldItem.propTypes = {
  t: PropTypes.func.isRequired,
  titleKey: PropTypes.string.isRequired,
  subtitleKey: PropTypes.string.isRequired,
  horizontal: PropTypes.bool.isRequired,

  index: PropTypes.number.isRequired,
  itemSchemaFields: PropTypes.arrayOf(
    PropTypes.shape(FieldSubitemPropTypes)
  ).isRequired,
  item: PropTypes.object.isRequired, // Собственно значение поля согласно схеме
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default translate('field_item')(FieldItem);
