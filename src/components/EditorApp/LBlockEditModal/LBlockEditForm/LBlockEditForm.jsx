import React, { Component, PropTypes } from 'react';

import { translate } from 'react-i18next';
import partial from 'lodash/partial';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import ContentSchemaForm from './ContentSchemaForm';
import NodeAttributes from './NodeAttributes';
import BackgroundForm from './BackgroundForm';
import FormEditor from './FormEditor';
import { viewsRepository } from 'repositories/ViewsRepository';

import BlockDebug from './BlockDebug';

import './LBlockEditForm.css';

class LBlockEditForm extends Component {
  render() {
    console.log("EditForm", new Date());
    const {
      t,
      block,
      onChange,
      changeForm,
      changeBackgroundImage,
      changeContent,
      changeNodeAttribute,
    } = this.props;

    // When material modal is closing animated here is not block
    //
    if (!block) {
      return false;
    }

    const { uuid } = block;

    const onContentChange = partial(changeContent, uuid);
    const onFormChange = partial(changeForm, uuid);
    const onNodeAttributeChange = partial(changeNodeAttribute, uuid);
    const onBackgroundImageChange = partial(changeBackgroundImage, uuid);

    const schema = viewsRepository.getContentSchemaByViewName(block.viewName);

    const tabs = [
      <Tab key={1} label={t('content')}>
        <ContentSchemaForm
          schema={schema}
          content={block.content}
          onChange={onContentChange}
        />
      </Tab>,
      <Tab key={2} label={t('element')}>
        <NodeAttributes
          attributes={block.nodeAttributes}
          onChange={onNodeAttributeChange}
        />
      </Tab>,
    ];
    if (schema.form) {
      tabs.push( <Tab key={3} label={t('form')}>
          <FormEditor
            formContent={block.form}
            onChange={onFormChange}
          />
        </Tab>);
    }
    if (schema.backgroundImage) {
      tabs.push( <Tab key={4} label={t('background')}>
        <BackgroundForm
          block={block}
          onChange={onBackgroundImageChange}
        />
      </Tab>);
    }

    tabs.push(
      <Tab label={t('data')} key={5}>
        <BlockDebug block={block} />
      </Tab>
    );

    return (<Tabs onChange={onChange}>{tabs}</Tabs>);
  }
}

LBlockEditForm.propTypes = {
  t: PropTypes.func.isRequired,
  block: PropTypes.object,
  onChange: PropTypes.func,
  changeNodeAttribute: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  changeBackgroundImage: PropTypes.func.isRequired,
  changeForm: PropTypes.func.isRequired,
};

export default translate('block_edit_form')(LBlockEditForm);
