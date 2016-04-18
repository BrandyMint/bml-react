import UserInputTypes from 'views/elements/ContentForm/inputTypes';

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
      defaultValue: 'SUBMIT',
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
      defaultValue: '',
    },
    {
      title: 'UUID коллекции',
      key: 'collectionUuid',
      type: 'string',
      hint: 'Оставьте пустым, чтобы данные формы попали в заявки',
      isRequired: false,
      defaultValue: '',
    },
    {
      title: 'Поля',
      key: 'fields',
      type: 'items',
      isRequired: true,
      itemSchema: {
        limit: 3,
        titleKey: 'title',
        subtitleKey: 'placeholder',
        fields: [
          {
            title: 'Название поля',
            key: 'title',
            type: 'string',
            isRequired: false,
            defaultValue: 'FIELD NAME',
          },
          {
            title: 'Placeholder',
            key: 'placeholder',
            type: 'string',
            isRequired: false,
            defaultValue: '',
          },
          {
            title: 'Ключ',
            key: 'name',
            type: 'string',
            isRequired: true,
            defaultValue: 'field_key',
          },
          {
            title: 'Подсказка',
            key: 'hint',
            type: 'string',
            isRequired: false,
            defaultValue: '',
          },
          {
            title: 'Тип',
            key: 'inputType',
            type: 'dropdownList',
            data: UserInputTypes,
            isRequired: true,
            defaultValue: UserInputTypes[0],
          },
          {
            title: 'Маска',
            key: 'mask',
            type: 'string',
            placeholder: 'Например: +7 (999) 999-99-99',
            hint: '<a href="http://sanniassin.github.io/react-input-mask/demo.html" target="_blank">Примеры масок</a>',
            isRequired: false,
            defaultValue: '',
          },
          {
            title: 'Обязательное?',
            key: 'isRequired',
            type: 'checkbox',
            isRequired: true,
            defaultValue: true,
          },
          {
            title: 'Данные справочника (только для dropdownList)',
            key: 'entities',
            type: 'entities',
            isRequired: false,
            defaultValue: [],
          },
        ],
      },
    },
  ],
};
