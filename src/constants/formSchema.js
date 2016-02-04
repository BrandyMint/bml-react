const ShortInputTypes = [
  'text',
  'url',
  'email',
  'tel',
  'number',
];

const Destinations = [
  'collection',
  'POST',
];

export default {
  fields: [
    {
      title: 'Кнопка',
      key: 'submitTitle',
      type: 'string',
      isRequired: true,
    },
    {
      title: 'Получатель',
      key: 'destination',
      type: 'dropdownList',
      defaultValue: 'collection',
      data: Destinations,
      isRequired: true,
    },

    /*
    { // Используется если destination == collection
      title: 'Коллекция',
      key: 'collection',
      type: 'string',
      isRequired: false,
      },
    */
    {
      title: 'URL для запроса, если получатель POST',
      key: 'url',
      type: 'string',
      isRequired: false,
    },
    {
      title: 'Поля',
      key: 'fields',
      type: 'items',
      isRequired: true,
      itemSchema: {
        limit: 3,
        fields: [
          {
            title: 'Название поля',
            key: 'title',
            type: 'string',
            isRequired: false,
          },
          {
            title: 'Placeholder',
            key: 'placeholder',
            type: 'string',
            isRequired: false,
          },
          {
            title: 'Ключ',
            key: 'key',
            type: 'string',
            isRequired: true,
          },
          {
            title: 'Тип',
            key: 'inputType',
            type: 'dropdownList',
            data: ShortInputTypes,
            isRequired: true,
          },
        ],
      },
    },
  ],
};
