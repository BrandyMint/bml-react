export const sections = [
  {
    title: 'Вертикальная форма снизу',
    icon: 'ti-layout-menu-v',
    'content': {
      'text': '<h3>УСЛОВИЯ УЧАСТИЯ:</h3><p>1. Вы регистрируетесь в форме ниже</p><p>2. Обновляете свой статус в "ВКонтакте" или Facebook, оставив комментарий под формой регистрации:</p><p>"Я иду на бесплатный мастер-класс Бизнес Молодости в Челябинске «Как выбрать нишу и сделать на ней первые деньги?» http://molodost.bz/region_3marta_chelyabinsk"</p>',
      'leadText': '<p>werwerewr</p><p><br></p><br>'
    },
    'form': {
      'submitTitle': 'ПРИНЯТЬ УЧАСТИЕ',
      'destination': 'collection',
      'collection': 'default',
      'fields': [
        {
          'title': '',
          'placeholder': 'ВВЕДИТЕ ВАШЕ ИМЯ',
          'name': 'name',
          'inputType': 'text'
        },
        {
          'title': '',
          'placeholder': 'ВВЕДИТЕ ВАШ ЕМАЙЛ',
          'name': 'email',
          'inputType': 'email'
        },
        {
          'title': '',
          'placeholder': 'ВВЕДИТЕ ВАШ ТЕЛЕФОН',
          'name': 'phone',
          'inputType': 'tel',
          'mask': '+7 (999) 999-99-99'
        },
        {
          'title': '',
          'placeholder': 'ГОРОД',
          'name': 'city',
          'inputType': 'text'
        },
        {
          'title': '',
          'placeholder': 'КОМАНДА',
          'name': 'team',
          'inputType': 'text'
        },
        {
          'title': '',
          'placeholder': 'КЛУБ',
          'name': 'club',
          'inputType': 'text'
        },
        {
          'title': 'Категория',
          'placeholder': '',
          'name': 'category',
          'inputType': 'dropdownList',
          'dictionaryKey': 'categories',
          'entities': ["Дети", "Фитнесс", "Спортсмены", "Атлеты", "Мастера", "Команды"]
        }
      ]
    },
  }
];
