import { defaultLogoImage } from 'constants/defaults';

const event = "FitTest 04'2016";

const data = {
  divisions: ['Дети 10-13', 'Тинейджер 14-15', 'Тинейджер 16-17', 'Новички', 'Любители', 'Атлеты', 'Мастер (40+)'],
  events: [event],
  tables: [
    {
      division: 'Новички',
      event: event,
      sex: 'm',
      records: [
        {
          title: 'Иванов Иван',
          rank: 1,
          score: '1:11',
        },
        {
          title: 'Александров Инокентий',
          note: 'Москва',
          rank: 2,
          score: '2:41',
        },
      ],
    },
    {
      division: 'Новички',
      event: event,
      sex: 'f',
      records: [
        {
          title: 'Петрова Светлана',
          rank: 1,
          score: '1:27',
        },
        {
          title: 'Сидорова Мария',
          rank: 2,
          score: '1:57',
        },
      ],
    },
  ],
};

export const sections = [
  {
    title: 'Рейтинговая таблица',
    icon: 'ti-crown',
    content: {
      title: 'CrossFit RedShell',
      logo: { ...defaultLogoImage },
      data: data,
    },
  },
];
