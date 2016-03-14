export default [
  {
    viewName: 'HeaderList',
    title: 'Список с заголовком',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    defaultData: {
      content: {
        header: 'Заголовок',
        items: [
          {
            title: 'Twitter',
          },
          {
            title: 'GitHub',
          },
        ],
      },
    },
  },

  {
    viewName: 'IconifyFeatures',
    title: 'Возможности иконками',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    defaultData: {
      content: {
        header: 'Заголовок',
        features: [
          {
            title: 'Возможность 1',
            iconClass: 'ti-gallery',
          },
          {
            title: 'Возможность 2',
            iconClass: 'ti-package',
          },
          {
            title: 'Возможность 3',
            iconClass: 'ti-layers',
          },
        ],
      },
    },
  },

  {
    viewName: 'HeaderText',
    title: 'Текст с заголовком',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    defaultData: {
      content: {
        header: 'Заголовок',
        text: 'текст',
      },
    },
  },

  {
    viewName: 'PlainHTML',
    title: 'Чистый HTML',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    defaultData: {
      content: {
        html: '<h1>Заголовок</h1><p>текст</p>',
      },
      nodeAttributes: {
        class: 'container BML-section--padding',
      },
    },
  },
  {
    viewName: 'PlainText',
    title: 'Текстовая страница',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    defaultData: {
      content: {
        text: '<h1>Симпатичный заголовок</h1><p>и очень длинный текст</p>',
      },
    },
  },
  {
    viewName: 'Form1',
    title: 'Форма с текстом',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 4,
    defaultData: {
      content: {
        text: 'some text',
      },
      form: {
        submitTitle: 'Подписаться',
        destination: 'collection',
        collection: 'default',
        fields: [
          {
            title: '',
            placeholder: 'Имя',
            name: 'name',
            inputType: 'text',
          },
          {
            title: '',
            placeholder: 'Емайл',
            name: 'email',
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
    viewName: 'InlineForm1',
    title: 'Однострочная форма',
    image: {
      url: '/assets/images/themes/t1/intro-bg.jpg',
      height: 100,
      width: 100,
    },
    rate: 4,
    defaultData: {
      content: {
        text: '',
      },
      form: {
        submitTitle: 'Подписаться',
        destination: 'collection',
        collection: 'default',
        fields: [
          {
            title: '',
            placeholder: 'Имя',
            name: 'name',
            inputType: 'text',
          },
          {
            title: '',
            placeholder: 'Емайл',
            name: 'email',
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
    viewName: 'GoogleMap1',
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
    viewName: 'ContentSection1',
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
        header: 'Death to the Stock Photo: <br /> Special Thanks',
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
    viewName: 'Footer1',
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
        text: 'Copyright © Your Company 2014. All Rights Reserved',
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
    viewName: 'MustRead3',
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
      backgroundVideos: [
        { src: '/assets/video/video.mp4', type: 'video/mp4' },
        { src: '/assets/video/video.webm', type: 'video/webm' },
        { src: '/assets/video/video.ogv', type: 'video/ogg' },
      ],
      nodeAttributes: {
        id: '44086800-a7e8-0133-a838-746d04736cf8',
        class: '',
      },
      meta: {},
    },
  },
  {
    viewName: 'Navbar',
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
