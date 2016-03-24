import { defaultBackgroundUrl } from 'constants/defaults';

export const sections = [
  {
    title: 'Блок внимания',
    icon: 'ti-layout-cta-right',
    description: 'Правый',
    backgroundImage: {
      uuid: null,
      url: defaultBackgroundUrl,
      width: null,
      height: null,
    },
    content: {
      header: 'Посадочная страница со взрывной эффективностью!',
      subheader: 'Удобный конструктор сайта с автоматической аналитикой',
      items: [
        {
          text: 'Вперед!',
          href: '#form',
        },
      ],
    },
  },
];
