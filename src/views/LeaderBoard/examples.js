import { redshellLogoImage } from 'constants/defaults';

const event = "FitTest 04'2016";
const division1 = "Новички";
const division2 = "Атлеты";

const recordsMale1 = [
  {
    title: 'Николай Спидиронов',
    rank: 1,
    score: '1:11',
  },
  {
    title: 'Дмитрий Атлеткин',
    note: 'Йошкар-Ола',
    rank: 1,
    score: '1:11',
  },
];

const recordsFemale1 = [
  {
    title: 'Ирина Васильева',
    rank: 1,
    score: '1:58',
  },
  {
    title: 'Анна Кузьмина',
    rank: 2,
    score: '2:12',
  },
];

const recordsMale2 = [
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
];

const recordsFemale2 = [
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
];

const data = {
  divisions: [division1, division2],
  events: [event],
  tables: [
    {
      division: division1,
      event: event,
      sex: 'male',
      records: recordsMale1,
    },
    {
      division: division1,
      event: event,
      sex: 'female',
      records: recordsFemale1,
    },
    {
      division: division2,
      event: event,
      sex: 'male',
      records: recordsMale2,
    },
    {
      division: division2,
      event: event,
      sex: 'female',
      records: recordsFemale2,
    },
  ],
};

export const sections = [
  {
    title: 'Рейтинговая таблица',
    icon: 'ti-crown',
    content: {
      title: 'CrossFit RedShell',
      logo: { ...redshellLogoImage },
      data: data,
    },
  },
];
