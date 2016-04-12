// Типы, который можно использовать в input-ах (тегах)
// пользовательских форм
//
//  А где-то еще задаются типы, которые можно выбрать в редакторе формы. Надо их синхронизировать
//'date',
//'datetime-local',
//'time',
//'week',
//'range',
//'radio',
//'search',
// 'month',

export const DROPDOWN_INPUT_TYPE = 'dropdownList';

export default [
  'text',
  'url',
  'email',
  'tel',
  'number',
  'checkbox',
  DROPDOWN_INPUT_TYPE,
];
