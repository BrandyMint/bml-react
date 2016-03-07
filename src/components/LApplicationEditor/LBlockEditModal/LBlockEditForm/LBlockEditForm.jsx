import React, { Component, PropTypes } from 'react';

import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

import ContentSchemaForm from './ContentSchemaForm';
import NodeAttributes from './NodeAttributes';
import BackgroundForm from './BackgroundForm';
import FormEditor from './FormEditor';
import { viewsRepository } from 'repositories/ViewsRepository';

import './LBlockEditForm.css';

class LBlockEditForm extends Component {
  render() {
    const {
      block,
      onNodeAttributeChange,
      onContentChange,
      onBackgroundImageChange,
      onFormChange,
      } = this.props;

    const schema = viewsRepository.getContentSchemaByViewName(block.view);
    return (
      <Tabs>
        <Tab eventKey={1} title="Содержание">
          <ContentSchemaForm
            schema={schema}
            content={block.content}
            onChange={onContentChange}
          />
        </Tab>
        <Tab eventKey={2} title="Свойства элемента">
          <NodeAttributes
            attributes={block.nodeAttributes}
            onChange={onNodeAttributeChange}
          />
        </Tab>
        { schema.form && (
          <Tab eventKey={3} title="Форма">
            <FormEditor
              formContent={block.form}
              onChange={onFormChange}
            />
          </Tab>)
        }
        { schema.backgroundImage && (
          <Tab eventKey={4} title="Фон">
            <BackgroundForm
              backgroundImage={block.backgroundImage || {}}
              onChange={onBackgroundImageChange}
            />
          </Tab>)
        }
        <Tab eventKey={5} title="JSON">
          <pre>
            <code>
              {JSON.stringify(block, undefined, 2)}
            </code>
          </pre>
        </Tab>
      </Tabs>
    );
  }
}

LBlockEditForm.propTypes = {
  block: PropTypes.object.isRequired,
  onNodeAttributeChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  onBackgroundImageChange: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default LBlockEditForm;
