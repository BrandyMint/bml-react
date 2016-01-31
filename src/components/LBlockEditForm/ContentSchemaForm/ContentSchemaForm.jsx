import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';
import TypesRepository from 'helpers/TypesRepository';

import Field from './Field';

class ContentSchemaForm extends Component {
  render() {
    const { block, content, onChange } = this.props;

    const schema = TypesRepository.getContentSchema(block.type);

    return (
      <div className="TabPage">
      {map(schema.fields, (field, index) =>
        (
          <Field
            field={field}
            key={index}
            content={content}
            onChange={partial(onChange, field.key)}
          />
        )
      )}
      </div>
    );
  }
}

ContentSchemaForm.propTypes = {
  block: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContentSchemaForm;
