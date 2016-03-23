import { defaultBoxImage3 } from 'constants/defaults';

export const sections = [
  {
    title: 'Текст с изображением',
    icon: 'ti-layout-media-right',
    description: 'Изображение справа',
    content: {
      header: 'Отдельное спасибо <br />Death to the Stock Photo !',
      leadText: 'Отдельное спасибо <a target=\'_blank\' href=\'http://join.deathtothestockphoto.com/\'>Death to the Stock Photo</a> за предоставленные фотографии которые Вы видите в этом шаблоне. <br />Посетите их сайт и получите доступ к огрмному количеству качественных фото.',
      image: { ...defaultBoxImage3 },
      links: [],
    },
  },
];
