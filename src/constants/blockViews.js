import {
  CONTENT_SECTION_TYPE1,
  CTA_TYPE1,
  FOOTER_TYPE1,
  MUST_READ_TYPE1,
  NAVBAR_TYPE1,
} from 'constants/blockTypesKeys';

import {
  CONTENT_SECTION_TYPE1_VIEW1,
  CONTENT_SECTION_TYPE1_VIEW2,
  CONTENT_SECTION_TYPE1_VIEW3,

  CTA_TYPE1_VIEW1,

  FOOTER_TYPE1_VIEW1,

  MUST_READ_TYPE1_VIEW1,

  NAVBAR_TYPE1_VIEW1,
} from 'constants/blockViewsKeys';

const BLOCK_VIEWS = {
  [CONTENT_SECTION_TYPE1]: [
    {
      view: CONTENT_SECTION_TYPE1_VIEW1,
      title: 'Область с контентом',
      description: 'raw description2',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
    {
      view: CONTENT_SECTION_TYPE1_VIEW2,
      title: 'Область с контентом 2',
      description: 'raw description22',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
    {
      view: CONTENT_SECTION_TYPE1_VIEW3,
      title: 'Область с контентом 3',
      description: 'raw description22323',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 2,
    },
  ],
  [CTA_TYPE1]: [
    {
      view: CTA_TYPE1_VIEW1,
      title: 'Кнопка действий',
      description: 'raw description22323',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 3,
    },
  ],
  [FOOTER_TYPE1]: [
    {
      view: FOOTER_TYPE1_VIEW1,
      title: 'Подвал',
      description: 'raw description223',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 5,
    },
  ],
  [MUST_READ_TYPE1]: [
    {
      view: MUST_READ_TYPE1_VIEW1,
      title: 'Заголовок',
      description: 'html raw description',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 1,
    },
  ],
  [NAVBAR_TYPE1]: [
    {
      view: NAVBAR_TYPE1_VIEW1,
      title: 'Панель навигации',
      description: 'raw description',
      image: {
        url: '/assets/images/themes/t1/intro-bg.jpg',
        height: 100,
        width: 100,
      },
      rate: 4,
    },
  ],
};

export default BLOCK_VIEWS;