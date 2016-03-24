import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';

import Field from './Field';

class ContentSchemaForm extends Component {
  render() {
    const { content, schema, onChange } = this.props;

    return (
      <div className="TabPage">
      {map(schema.fields, (field, index) =>
        (
          <Field
            field={field}
            key={index}
            value={content[field.key]}
            onChange={partial(onChange, field.key)}
          />
        )
      )}
      </div>
    );
  }
}

ContentSchemaForm.propTypes = {
  schema: PropTypes.object.isRequired, // TODO schema propType
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContentSchemaForm;
