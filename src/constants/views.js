import {
  HEADER_TYPE, NAVBAR_TYPE, CONTENT_SECTION_TYPE, CTA_TYPE, FOOTER_TYPE,
} from './blockTypes';

import {
  HEADER_VIEW_V1,
  HEADER_VIEW_V2,

  NAVBAR_VIEW_V1,

  CONTENT_SECTION_VIEW_V1,
  CONTENT_SECTION_VIEW_V2,
  CONTENT_SECTION_VIEW_V3,

  CTA_VIEW_V1,

  FOOTER_VIEW_V1,
} from './blockViews';

const VIEWS = {
  [HEADER_TYPE]: [
    {
      view: HEADER_VIEW_V1,
      title: 'Заголовок',
      description: 'html raw description',
      image: {
        url: 'google.ru',
        height: 100,
        width: 100,
      },
      rate: 1,
    },
    {
      view: HEADER_VIEW_V2,
      title: 'Заголовок 2',
      description: 'html raw descriptiondsad',
      image: {
        url: 'google.ru',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
  ],
  [NAVBAR_TYPE]: [
    {
      view: NAVBAR_VIEW_V1,
      title: 'Панель навигации',
      description: 'raw description',
      image: {
        url: 'hello.ru',
        height: 100,
        width: 100,
      },
      rate: 4,
    },
  ],
  [CONTENT_SECTION_TYPE]: [
    {
      view: CONTENT_SECTION_VIEW_V1,
      title: 'Область с контентом',
      description: 'raw description2',
      image: {
        url: 'hello3.ru',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
    {
      view: CONTENT_SECTION_VIEW_V2,
      title: 'Область с контентом 2',
      description: 'raw description22',
      image: {
        url: 'hello3.ru',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
    {
      view: CONTENT_SECTION_VIEW_V3,
      title: 'Область с контентом 3',
      description: 'raw description22323',
      image: {
        url: 'hello3.ru',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
  ],
  [CTA_TYPE]: [
    {
      view: CTA_VIEW_V1,
      title: 'Кнопка действий',
      description: 'raw description22323',
      image: {
        url: 'hello123.ru',
        height: 100,
        width: 100,
      },
      rate: 3,
    },
  ],
  [FOOTER_TYPE]: [
    {
      view: FOOTER_VIEW_V1,
      title: 'Подвал',
      description: 'raw description223',
      image: {
        url: 'hello1.ru',
        height: 100,
        width: 100,
      },
      rate: 5,
    },
  ],
};

export default VIEWS;