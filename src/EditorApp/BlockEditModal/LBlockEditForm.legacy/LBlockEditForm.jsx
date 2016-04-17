import React, { Component, PropTypes } from 'react';

import { translate } from 'react-i18next';
import partial from 'lodash/partial';

import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';

import ContentSchemaForm from 'components/ContentSchemaForm';
import NodeAttributes from './NodeAttributes';
import BackgroundForm from './BackgroundForm';
import FormEditor from './FormEditor';
import { viewsRepository } from 'repositories/ViewsRepository';

import BlockDebug from './BlockDebug';

import './LBlockEditForm.css';

class LBlockEditForm extends Component {

  constructor(props) {
    super(props);

    if (props.block) {
      const { viewName, uuid } = props.block;
      const { changeContent, changeForm, changeNodeAttribute, changeBackgroundImage } = props;

      this.onContentChange = partial(changeContent, uuid);
      this.onFormChange = partial(changeForm, uuid);
      this.onNodeAttributeChange = partial(changeNodeAttribute, uuid);
      this.onBackgroundImageChange = partial(changeBackgroundImage, uuid);

      this.schema = viewsRepository.getContentSchemaByViewName(viewName);
    }
  }

  shouldComponentUpdate(nextProps) {
    const should = nextProps.block !== this.props.block;

    return should;
  }

  render() {
    const {
      t,
      block,
      onChange,
    } = this.props;

    // When material modal is closing animated here is not block
    //
    if (!block) {
      return false;
    }

    const tabs = [
      <Tab key={1} label={t('content')}>
        <ContentSchemaForm
          schemaFields={this.schema.fields}
          content={block.content}
          onChange={this.onContentChange}
        />
      </Tab>,
      <Tab key={2} label={t('element')}>
        <NodeAttributes
          attributes={block.nodeAttributes}
          uuid={block.uuid}
          onChange={this.onNodeAttributeChange}
        />
      </Tab>,
    ];
    if (this.schema.form) {
      tabs.push( <Tab key={3} label={t('form')}>
          <FormEditor
            formContent={block.form}
            onChange={this.onFormChange}
          />
        </Tab>);
    }
    if (this.schema.backgroundImage) {
      tabs.push( <Tab key={4} label={t('background')}>
        <BackgroundForm
          block={block}
          onChange={this.onBackgroundImageChange}
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
