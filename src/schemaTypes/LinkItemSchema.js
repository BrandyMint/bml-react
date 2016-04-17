import LinkSchemaFields from 'schemaTypes/LinkFields';
const DEFAULT_LIMIT = 10;

export default {
  limit: DEFAULT_LIMIT,
  titleKey: 'text',
  subtitleKey: 'href',
  fields: LinkSchemaFields,
};
