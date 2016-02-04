export default {
  fields: [
    {
      title: 'Кнопка',
      key: 'submitTitle',
      type: 'string',
      isRequired: true,
    },
    /*
    {
      title: 'Получатель',
      key: 'destination', // collection, POST
      type: 'string',
      isRequired: true,
    },
    { // Используется если destination == collection
      title: 'Коллекция',
      key: 'collection',
      type: 'string',
      isRequired: false,
    },
    { // Используется если destination == POST
      title: 'URL для запроса',
      key: 'url',
      type: 'string',
      isRequired: false,
      },
    */
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
            type: 'string',
            isRequired: true,
          },
        ],
      },
    },
  ],
};
