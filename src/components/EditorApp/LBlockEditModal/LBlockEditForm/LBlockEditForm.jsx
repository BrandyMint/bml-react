import React, { Component, PropTypes } from 'react';

import { translate } from 'react-i18next';
import partial from 'lodash/partial';

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
      t,
      block,
      changeForm,
      changeBackgroundImage,
      changeContent,
      changeNodeAttribute,
    } = this.props;

    const { uuid } = block;

    const onContentChange = partial(changeContent, uuid);
    const onFormChange = partial(changeForm, uuid);
    const onNodeAttributeChange = partial(changeNodeAttribute, uuid);
    const onBackgroundImageChange = partial(changeBackgroundImage, uuid);

    const schema = viewsRepository.getContentSchemaByViewName(block.viewName);
    return (
      <Tabs>
        <Tab eventKey={1} title={t('content')}>
          <ContentSchemaForm
            schema={schema}
            content={block.content}
            onChange={onContentChange}
          />
        </Tab>
        <Tab eventKey={2} title={t('element')}>
          <NodeAttributes
            attributes={block.nodeAttributes}
            onChange={onNodeAttributeChange}
          />
        </Tab>
        { schema.form && (
          <Tab eventKey={3} title={t('form')}>
            <FormEditor
              formContent={block.form}
              onChange={onFormChange}
            />
          </Tab>)
        }
        { schema.backgroundImage && (
          <Tab eventKey={4} title={t('background')}>
            <BackgroundForm
              block={block}
              onChange={onBackgroundImageChange}
            />
          </Tab>)
        }
        <Tab eventKey={5} title={t('data')}>
          <pre>
            <code className="LBlockEditForm-code">
              {JSON.stringify(block, undefined, 2)}
            </code>
          </pre>
        </Tab>
      </Tabs>
    );
  }
}

LBlockEditForm.propTypes = {
  t: PropTypes.func.isRequired,
  block: PropTypes.object.isRequired,
  changeNodeAttribute: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  changeBackgroundImage: PropTypes.func.isRequired,
  changeForm: PropTypes.func.isRequired,
};

export default translate('block_edit_form')(LBlockEditForm);
