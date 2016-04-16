export default [
  {
    title: 'Текст',
    key: 'text',
    type: 'string',
    isRequired: true,
    defaultValue: 'BUTTON',
  },
  {
    title: 'Ссылка',
    key: 'href',
    type: 'url',
    isRequired: true,
  },
  {
    title: 'Target',
    key: 'target',
    type: 'dropdownList',
    defaultValue: '_parent',
    data: [
      '_blank',
      '_self',
      '_parent',
      '_top',
      // custom framename
    ],
    isRequired: true,
  },
];
