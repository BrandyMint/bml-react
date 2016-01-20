const BLOCKS = [
  {
    type: 'LBlockHeader',
    view: 'LBLockHeaderV1',
    title: 'Заголовок',
    description: 'html raw description',
    image: {
      url: 'google.ru',
      height: 100,
      width: 100,
    },
    rate: 1,
    defaultData: {
      header: 'Hello',
      subheader: 'My little friend!',
    },
  },
  {
    type: 'LBlockNavbar',
    view: 'LBlockNavbarV1',
    title: 'Панель навигации',
    description: 'raw description',
    image: {
      url: 'hello.ru',
      height: 100,
      width: 100,
    },
    rate: 4,
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
    }
  },
  {
    type: 'LBlockContentSection',
    view: 'LBlockContentSectionV1',
    title: 'Область с контентом',
    description: 'raw description2',
    image: {
      url: 'hello3.ru',
      height: 100,
      width: 100,
    },
    rate: 2,
    defaultData: {
      headerText: 'Death to the Stock Photo: <br /> Special Thanks',
      leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
      image: {
        url: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/ipad.png',
        height: 354,
        width: 458,
      },
    }
  },
  {
    type: 'LBlockCTA',
    view: 'LBlockCTAV1',
    title: 'Кнопка действий',
    description: 'raw description22323',
    image: {
      url: 'hello123.ru',
      height: 100,
      width: 100,
    },
    rate: 3,
    defaultData: {
      text: 'Connect to Start BML:',
      backgroundImageUrl: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/banner-bg.jpg',
      items: [
        {
          title: 'Twitter',
          url: 'twitter.com'.
        },
        {
          title: 'GitHub',
          url: 'github.com',
        },
      ],
    }
  },
  {
    type: 'LBlockFooter',
    view: 'LBlockFooterV1',
    title: 'Подвал',
    description: 'raw description223',
    image: {
      url: 'hello1.ru',
      height: 100,
      width: 100,
    },
    rate: 5,
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
    }
  }
];

export default BLOCKS;