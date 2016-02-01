import {
  CONTENT_SECTION_TYPE1,
  CTA_TYPE1,
  FOOTER_TYPE1,
  MUST_READ_TYPE1,
  NAVBAR_TYPE1,
  MAP_TYPE1,
} from 'constants/blockTypesKeys';

const BLOCK_TYPES = [
  {
    type: MAP_TYPE1,
    defaultData: {
      content: {
        center: {
          lat: 59.938043,
          lng: 30.337157,
        },
        zoom: 9,
        places: [
          {
            location: {
              lat: 59.724465,
              lng: 30.080121,
            },
            title: 'Велосипедная дорожка',
          },
        ],
      },
      nodeAttributes: {
      },
      meta: {
      },
    },
  },
  {
    type: CONTENT_SECTION_TYPE1,
    defaultData: {
      content: {
        headerText: 'Death to the Stock Photo: <br /> Special Thanks',
        image: {
          url: '/assets/images/themes/t1/ipad.png',
          height: 354,
          width: 458,
        },
        leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
      },
      backgroundImage: {
      },
      nodeAttributes: {
        id: '44086800-a7e8-0133-a838-746d04736cf8',
        class: '',
      },
      meta: {},
    },
  },
  {
    type: CTA_TYPE1,
    defaultData: {
      content: {
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
        text: 'Connect to Start BML:',
      },
      backgroundImage: {
        uuid: null,
        url: '/assets/images/themes/t1/banner-bg.jpg',
        width: null,
        height: null,
      },
      nodeAttributes: {
        id: '44086800-a7e8-0133-a838-746d04736cf8',
        class: '',
      },
      meta: {},
    },
  },
  {
    type: FOOTER_TYPE1,
    defaultData: {
      content: {
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
      backgroundImage: { },
      nodeAttributes: {
        id: '44086800-a7e8-0133-a838-746d04736cf8',
        class: '',
      },
      meta: {},
    },
  },
  {
    type: MUST_READ_TYPE1,
    defaultData: {
      content: {
        header: 'Hello',
        subheader: 'My little friend!',
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
      backgroundImage: {
        uuid: null,
        url: '/assets/images/themes/t1/intro-bg.jpg',
        width: null,
        height: null,
      },
      nodeAttributes: {
        id: '44086800-a7e8-0133-a838-746d04736cf8',
        class: '',
      },
      meta: {},
    },
  },
  {
    type: NAVBAR_TYPE1,
    defaultData: {
      content: {
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
      backgroundImage: {
      },
      nodeAttributes: {
        id: '44086800-a7e8-0133-a838-746d04736cf8',
        class: '',
      },
      meta: {},
    },
  },
];

export default BLOCK_TYPES;
