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
  }
];

export default BLOCKS;