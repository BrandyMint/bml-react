import ShortInputTypes from 'constants/usedInputTypes';

export const Destinations = [
  'collection',
  'POST',
];


// Схема описывает форму для создания application (пользоватльской формы)
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
        title: 'HTML-идентификатор',
        key: 'id',
        type: 'string',
      },
      {
        title: 'HTML-имя формы',
        key: 'name',
        type: 'string',
      },
    {
      title: 'Получатель',
      key: 'destination',
      type: 'dropdownList',
      defaultValue: 'collection',
      data: Destinations,
      isRequired: true,
    },
    { // Используется если destination == collection
      title: 'Коллекция (если получатель collection)',
      key: 'collection',
      type: 'string',
      isRequired: false,
      },
      */
    {
      title: 'URL для запроса (если получатель POST)',
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
            key: 'name',
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
          {
            title: 'Данные справочника (только для dropdownList)',
            key: 'entities',
            type: 'entities',
            isRequired: false,
          },
        ],
      },
    },
  ],
};
