import {
  CONTENT_SECTION_TYPE1,
  CTA_TYPE1,
  FOOTER_TYPE1,
  MUST_READ_TYPE1,
  NAVBAR_TYPE1,
} from 'constants/blockTypesKeys';

const BLOCK_TYPES = [
  {
    type: CONTENT_SECTION_TYPE1,
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
    type: CTA_TYPE1,
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
    type: FOOTER_TYPE1,
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
    type: MUST_READ_TYPE1,
    defaultData: {
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
    type: NAVBAR_TYPE1,
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

export default BLOCK_TYPES;