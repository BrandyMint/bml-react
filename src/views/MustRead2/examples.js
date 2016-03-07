import {
  defaultBackgroundUrl,
  defaultBackgroundVideos,
} from 'constants/defaults';

export const sections = [
  {
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
