import { PropTypes } from 'react';
import mapValues from 'lodash/mapValues';
import { applyType } from 'views/utils';
import { propTypes as formContentType } from 'views/elements/ContentForm';

// TODO перейдет в частные файлы

import CustomPropTypes from 'constants/customPropTypes';
import LinkSchemaFields from 'schemaTypes/LinkFields';


const InlineForm = {
  typeName: 'InlineForm',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    form: formContentType.isRequired,
    uuid: PropTypes.string.isRequired,
  },

  contentSchema: {
    version: 1,
    backgroundImage: false,
    form: 'required',
    fields: [
      {
        title: 'Заголовок',
        key: 'title',
        type: 'string',
        isRequired: false,
      },
    ],
  },
};

const CTAContentType = {
  text: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // TODO array of shape
};

const CTA = {
  typeName: 'CTA',
  propTypes: {
    content: PropTypes.shape(CTAContentType).isRequired,
    form: formContentType,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Кнопки',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 3,
          fields: LinkSchemaFields,
        },
      },
    ],
  },
};

const types = {
  inlineForm: InlineForm,
  cta: CTA,
};

export const Types = mapValues(types, (value, key) => ({ ...value, typeName: value.typeName || key }));
