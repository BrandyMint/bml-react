import 'stylesheets/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from 'store';

import LApplication from 'components/LApplication';

import {
  CONTENT_SECTION_TYPE, CTA_TYPE, FOOTER_TYPE, MUST_READ_TYPE, NAVBAR_TYPE,
} from 'constants/blockTypesKeys';

import {
  CONTENT_SECTION_VIEW_V1,
  CONTENT_SECTION_VIEW_V2,
  CONTENT_SECTION_VIEW_V3,

  CTA_VIEW_V1,

  FOOTER_VIEW_V1,

  MUST_READ_VIEW_V1,

  NAVBAR_VIEW_V1,
} from 'constants/blockViewsKeys';

const types = [
  {
    type: CONTENT_SECTION_TYPE,
    defaultData: {
      headerText: 'Death to the Stock Photo: <br /> Special Thanks',
      leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
      image: {
        url: '/images/themes/t1/ipad.png',
        height: 354,
        width: 458,
      },
    },
  },
  {
    type: CTA_TYPE,
    defaultData: {
      text: 'Connect to Start BML:',
      backgroundImageUrl: '/images/themes/t1/banner-bg.jpg',
      items: [
        {
          title: 'Twitter',
          url: 'twitter.com',
        },
        {
          title: 'GitHub',
          url: 'github.com',
        },
      ],
    },
  },
  {
    type: FOOTER_TYPE,
    defaultData: {
      copyrightText: 'Copyright © Your Company 2014. All Rights Reserved',
      items: [
        {
          title: 'Home',
          url: '#',
        },
        {
          title: 'About',
          url: '#about',
        },
        {
          title: 'Services',
          url: '#services',
        },
      ],
    },
  },
  {
    type: MUST_READ_TYPE,
    defaultData: {
      header: 'Hello',
      subheader: 'My little friend!',
    },
  },
  {
    type: NAVBAR_TYPE,
    defaultData: {
      logoText: 'BML theme',
      items: [
        {
          title: 'About',
          url: 'google.ru',
        },
        {
          title: 'Services',
          url: 'services.ru',
        },
        {
          title: 'Contact',
          url: 'contact.ru',
        },
      ],
    },
  },
];
const views = {
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
  [MUST_READ_TYPE]: [
    {
      view: MUST_READ_VIEW_V1,
      title: 'Заголовок',
      description: 'html raw description',
      image: {
        url: 'google.ru',
        height: 100,
        width: 100,
      },
      rate: 1,
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
};

const initApp = (initialState) => {
  initialState = {...initialState, blocks: {...initialState.blocks, types, views}};
  const store = createStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <LApplication />
    </Provider>,
    document.getElementById('content')
  );
};

global.initApp = initApp;

if (__ENV__ === 'development') {
  initApp({
    blocks: {
      items: [
        {
          uuid: 'tko',
          type: 'LBlockNavbar',
          view: 'LBlockNavbarV1',
          data: {
            logoText: 'BML theme',
            items: [
              {
                title: 'About',
                url: 'google.ru',
              },
              {
                title: 'Services',
                url: 'services.ru',
              },
            ],
          },
        },
        {
          uuid: 'weq23',
          type: 'LBlockMustRead',
          view: 'LBlockMustReadV1',
          data: {
            header: 'Hello',
            subheader: 'My little friend!',
            backgroundImageUrl: '/images/themes/t1/intro-bg.jpg',
            items: [
              {
                title: 'Twitter',
                icon: 'twitter',
                url: 'twitter.com',
              },
              {
                title: 'GitHub',
                icon: 'github',
                url: 'github.com',
              },
              {
                title: 'LinkedIn',
                icon: 'linkedin',
                url: 'linkedin.com',
              },
            ],
          },
        },
        {
          uuid: 'hello',
          type: 'LBlockContentSection',
          view: 'LBlockContentSectionV1',
          data: {
            headerText: 'Death to the Stock Photo: <br /> Special Thanks;)',
            leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
            image: {
              url: '/images/themes/t1/ipad.png',
              height: 354,
              width: 458,
            },
          },
        },
        {
          uuid: 'hellov2',
          type: 'LBlockContentSection',
          view: 'LBlockContentSectionV2',
          data: {
            headerText: '3D Device Mockups <br /> by PSDCovers',
            leadText: 'Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!',
            image: {
              url: '/images/themes/t1/dog.png',
              height: 383,
              width: 458,
            },
          },
        },
        {
          uuid: 'hello2323',
          type: 'LBlockContentSection',
          view: 'LBlockContentSectionV1',
          data: {
            headerText: 'Google Web Fonts and<br>Font Awesome Icons',
            leadText: 'This template features the \'Lato\' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.',
            image: {
              url: '/images/themes/t1/phones.png',
              height: 302,
              width: 458,
            },
          },
        },
        {
          uuid: 'ctaMyBad',
          type: 'LBlockCTA',
          view: 'LBlockCTAV1',
          data: {
            text: 'Connect to BML landings:',
            backgroundImageUrl: '/images/themes/t1/banner-bg.jpg',
            items: [
              {
                title: 'Twitter',
                url: 'twitter.com',
              },
              {
                title: 'GitHub',
                url: 'github.com',
              },
            ],
          },
        },
        {
          uuid: 'myFooter',
          type: 'LBlockFooter',
          view: 'LBlockFooterV1',
          data: {
            copyrightText: 'Copyright © BML landing 2016. All Rights Reserved',
            items: [
              {
                title: 'Home',
                url: '#',
              },
              {
                title: 'About',
                url: '#about',
              },
              {
                title: 'Services',
                url: '#services',
              },
            ],
          },
        },
      ],
    }
  });
}
