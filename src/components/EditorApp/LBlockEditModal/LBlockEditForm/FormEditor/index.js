import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';
import Field from '../ContentSchemaForm/Field';

import formSchema from './formSchema';

// Редактор форм в настройках блока.
// Напоминает ContentSchemaForm, но у него своя схема и в будущем он будет кастомизироваться
//
class FormEditor extends Component {
  static propTypes = {
    formContent: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.formContent !== this.props.formContent;
  }

  render() {
    const { formContent, onChange } = this.props;
    console.log("FormEditor", new Date());

    return (
      <div className="FormEditor">
        {map(formSchema.fields, (field, index) =>
         (
          <Field
            field={field}
            key={index}
            value={formContent[field.key]}
            onChange={partial(onChange)}
          />
         )
        )}
      </div>
    );
  }
}

export default FormEditor;
