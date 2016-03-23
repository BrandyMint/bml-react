import { defaultBackgroundUrl, defaultBackgroundVideos } from 'constants/defaults';

export const sections = [
  {
    title: 'Блок внимания (по-центру) с видео',
    icon: 'ti-layout-cta-center',
    backgroundVideos: defaultBackgroundVideos,
    backgroundImage: {
      uuid: null,
      url: defaultBackgroundUrl,
      width: null,
      height: null,
    },
    content: {
      header: 'Как выбрать нишу<br>и сделать на ней первые деньги?',
      subheader: 'Тысячи людей, каждый день начинающие свой бизнес, в 95% случаев проваливаются, наступая на одни и те же грабли!Эти грабли — неправильно выбранная ниша.',
      items: [
        {
          text: 'ПРИНЯТЬ УЧАСТИЕ',
          href: '#form',
        },
      ],
    },
  },
];
