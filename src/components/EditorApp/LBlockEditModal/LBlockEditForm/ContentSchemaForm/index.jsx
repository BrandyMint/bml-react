import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

import Field from './Field';

// Универсальный генератор формы. Создает на экране форму из ее схемы и данных
// Используется в редактировании контента.
//
// Переименовть в ContentFormBuilder

class ContentSchemaForm extends Component {
  shouldComponentUpdate(nextProps) {
    const should = this.props.schema !== nextProps.schema ||
      this.props.content !== nextProps.content
    console.log('ContentSchemaForm', should);
    return should;
  }
  render() {
    const { content, schema, onChange } = this.props;

    return (
      <div className="ContentFormBuilder">
        {map(schema.fields, (field, index) =>
          (
            <Field
              field={field}
              key={index}
              value={content[field.key]}
              onChange={onChange}
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
