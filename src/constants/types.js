import {
  CONTENT_SECTION_TYPE, CTA_TYPE, FOOTER_TYPE, MUST_READ_TYPE, NAVBAR_TYPE,
} from './blockTypes';
import VIEWS from './views';

const TYPES = [
  {
    type: CONTENT_SECTION_TYPE,
    views: VIEWS[CONTENT_SECTION_TYPE],
    defaultData: {
      headerText: 'Death to the Stock Photo: <br /> Special Thanks',
      leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
      image: {
        url: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/ipad.png',
        height: 354,
        width: 458,
      },
    },
  },
  {
    type: CTA_TYPE,
    views: VIEWS[CTA_TYPE],
    defaultData: {
      text: 'Connect to Start BML:',
      backgroundImageUrl: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/banner-bg.jpg',
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
    views: VIEWS[FOOTER_TYPE],
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
    views: VIEWS[HEADER_TYPE],
    defaultData: {
      header: 'Hello',
      subheader: 'My little friend!',
    },
  },
  {
    type: NAVBAR_TYPE,
    views: VIEWS[NAVBAR_TYPE],
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

export default TYPES;