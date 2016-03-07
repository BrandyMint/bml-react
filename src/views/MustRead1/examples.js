import { defaultBackgroundUrl } from 'constants/defaults';
export const sections = [
  {
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
  {
    content: {
      header: 'На все 100%',
      subheader: 'Шаблон для посадочной страницы',
      items: [
        {
          text: 'Twitter',
          href: 'http://twitter.com',
        },
        {
          text: 'GitHub',
          href: 'http://github.com',
        },
      ],
    },
    backgroundImage: {
      uuid: null,
      url: defaultBackgroundUrl,
      width: null,
      height: null,
    },
  },
]
