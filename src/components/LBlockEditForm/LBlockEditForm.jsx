import React, { Component, PropTypes } from 'react';

import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

import ContentSchemaForm from './ContentSchemaForm';
import NodeAttributes from './NodeAttributes';
import BackgroundForm from './BackgroundForm';

import './LBlockEditForm.css';

class LBlockEditForm extends Component {
  render() {
    const {
      block,
      onNodeAttributeChange,
      onContentChange,
      onBackgroundImageChange,
      } = this.props;

    return (
      <Tabs>
        <Tab eventKey={1} title="Содержание">
          <ContentSchemaForm
            block={block}
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
        <Tab eventKey={3} title="Фон">
          <BackgroundForm
            backgroundImage={block.backgroundImage}
            onChange={onBackgroundImageChange}
          />
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
};

export default LBlockEditForm;
