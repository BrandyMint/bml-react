import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import TypesRepository from 'helpers/TypesRepository';

import Field from 'components/ContentSchemaForm/Field';

class ContentSchemaForm extends Component {
  render() {
    const { block } = this.props;

    const schema = TypesRepository.getContentSchema(block.type);

    return (
      <div className="TabPage">
        {map(schema.fields, (field, index) =>
           <Field field={field} key={index} block={block} />
        )}
      </div>
    );
  }
}

ContentSchemaForm.propTypes = {
  block: PropTypes.object.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

export default ContentSchemaForm;
