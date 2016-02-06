export default [
  {
    view: 'InlineForm1',
    title: 'Однострочная форма',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 4,
    defaultData: {
      content: {
      },
      form: {
        submitTitle: 'Подписаться',
        destination: 'collection',
        collection: 'default',
        fields: [
          {
            title: '',
            placeholder: 'Имя',
            key: 'name',
            inputType: 'text',
          },
          {
            title: '',
            placeholder: 'Емайл',
            key: 'email',
            inputType: 'email',
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
    view: 'GoogleMap1',
    title: 'Карта',
    description: 'Карта от karta.yandex.ru',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 4,
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
    view: 'ContentSection1',
    title: 'Область с контентом',
    description: 'raw description2',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 2,
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
    view: 'CTA1',
    title: 'Кнопка действий',
    description: 'raw description22323',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 3,
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
    view: 'Footer1',
    title: 'Подвал',
    description: 'raw description223',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 5,
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
    view: 'MustRead',
    title: 'Заголовок',
    description: 'html raw description',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 1,
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
    view: 'Navbar',
    title: 'Панель навигации',
    description: 'raw description',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 4,
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
