import React, { Component, PropTypes } from 'react';
import Field from './Field';

// Универсальный генератор формы. Создает на экране форму из ее схемы и данных
// Используется в редактировании контента.
//
// Переименовть в ContentFormBuilder

class ContentSchemaForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    const should = this.props.schemaFields !== nextProps.schemaFields ||
      this.props.uuid !== nextProps.uuid ||
      this.props.content !== nextProps.content
    return should;
  }
  onChange(path, value) {
    this.props.changeContent(this.props.uuid, path, value);
  }
  render() {
    const { uuid, content, schemaFields } = this.props;

    // Такое бывает когда модалку гасят
    if (!uuid || !content || !schemaFields) {
      return false;
    }
    return (
      <div className="ContentFormBuilder">
        {schemaFields.map((field, index) =>
          (
            <Field
              field={field}
              key={index}
              value={content[field.key]}
              onChange={this.onChange}
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
  uuid: PropTypes.string,
  changeContent: PropTypes.func.isRequired,
};

export default ContentSchemaForm;
