import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

import Field from './Field';

// Универсальный генератор формы. Создает на экране форму из ее схемы и данных
// Используется в редактировании контента.
//
// Переименовть в ContentFormBuilder

class ContentSchemaForm extends Component {
  shouldComponentUpdate(nextProps) {
    const should = this.props.schemaFields !== nextProps.schemaFields ||
      this.props.content !== nextProps.content
    return should;
  }
  render() {
    const { content, schemaFields, onChange } = this.props;

    return (
      <div className="ContentFormBuilder">
        {map(schemaFields, (field, index) =>
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
  schemaFields: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContentSchemaForm;
