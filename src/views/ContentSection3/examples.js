import { defaultBackgroundUrl2 } from 'constants/defaults';

export const sections = [
  {
    title: "Текст с кнопками",
    icon: 'ti-layout-media-overlay-alt-2',
    content: {
      text: 'Присоединяйся к нам в соцсетях!',
      items: [
        {
          text: 'Twitter',
          href: 'twitter.com',
        },
        {
          text: 'GitHub',
          href: 'github.com',
        },
      ],
    },
    backgroundImage: {
      url: defaultBackgroundUrl2,
    },
  },
]
