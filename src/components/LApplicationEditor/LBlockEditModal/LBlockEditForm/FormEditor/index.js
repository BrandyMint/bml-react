import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';
import Field from '../ContentSchemaForm/Field';

import formSchema from 'constants/formSchema';

class FormEditor extends Component {
  static propTypes = {
    formContent: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    const { formContent, onChange } = this.props;

    return (
      <div className="TabPage">
        {map(formSchema.fields, (field, index) =>
         (
          <Field
            field={field}
            key={index}
            value={formContent[field.key]}
            onChange={partial(onChange, field.key)}
          />
         )
        )}
      </div>
    );
  }
}

export default FormEditor;
