## Цель:

* [ ] BM-овский лендос в дизайне

## Баги:

* [ ] Пропадают кнопки при скролинге в редакторе

## Вопросы:

* [ ] Как правильно сделать backgroundResolver (aleksxor)
* [ ] Каких видов будут фоны (aciden). Сейчас есть уже image-bg, bg-default,
    bg-secondary, bg-primary
* [ ] Значения для media query (почему именно такие цифры)
* [ ] Почему в spacing-acid в media-query классы через тире, а остальные без?

## Фичи по блокам:

* [x] Сохранение и передача utm-меток и referer-ов
* [x] responsive image для изображения в телефоне
* [ ] Цвет фона бывает 4-х видов: --image --primary --secondary --default
* [ ] Восстановить Navbar
* [x] InlineForm, восстановить и перевести на ContentForm
* [x] возможно заменить CTA на ContentSection (то есть удалить CTA), либо сделать в ней паддинг
* [x] Мобильные варианты для всех вьюх (ContentSection в первую очередь)
* [x] Buttons в мобильном варианте
* [ ] MustRead1/2
    * [x] С видео
    * [x] с Изображением
    * [ ] Темный фон
    * [x] Светлый фон
    * [x] Заменить кнопки на Buttons

## Refactor (CSS)

* [x] Вытащить viewer_fonts.css
* [ ] Выделить из viewer.css стили от редактирования
* [ ] подключить стили к form-control вместо input
* [ ] использовать button submit вместо input submit
* [ ] Выделить media query в переменные или миксины (15 минут, легко)

## Refactor (JS)

* [ ] компилировать альтернативный dist без ужатия JS и CSS (-develop) версия
* [ ] Разобраться с руганью ч консоли http://3000.vkontraste.ru/editor/fullViewsExamples
* [ ] Чем ContentSection3 (без картинки) отличается от FreeText с кнопками?
* [ ] move CustomPropTypes.location. в views/types/Map
* [ ] Выделить набор типов для ссылки в отдельный тип input-а (Link), для того
    чтобы сделать для него отдельную форму редактирования в редактори и
    использовать для единичных ссылок (например в NavBar)
* [ ] всякие buttons и items переименовать в links и сделать отдельным свойствов в block (см LinkSchemaFields)
* [ ] ListItem в IconifyFeatures и в HeaderList выделить в один элемент у которого может быть иконка, а может не быть.
* [x] разбить типы на разные файлы и починить наличие block-а в props-ах во views (30 минут, легко)
* [x] заменить bg-image на BML-section--bgImage, dark на BML-section--dark
* [x] Избавиться от typeName в views/types, уставливать его автоматически при импорте
* [x] разобраться с customPropType
* [x] В SectionComponent передавать block отдельным полем, а не размазанным
* [x] rename BlockView ViewComponent
* [x] ЗАменить LPage в стилях на BML-section с целью уменьшения глубины путей в CSS
* [x] BML-section-padding заменить на BML-section--padding. (5 минут, легко)
* [x] Переименовать block.view во viewName
* [ ] разобраться с PropTypes.object
* [ ] Фиксануть TODO-шки
* [ ] В названии типа полей для редактора писть FieldString вместо 'string'


## Фичи

* [ ] Сохранение внешних ссылок в section/background
* [ ] Наличие кнопки или форма в большинстве видов блоков.
* [ ] Автоматическое управление фонами:
    * [ ] Установка image-bg если есть фон, заменить на BML-section--image-bg (1
        час)
    * [ ] автоматически устанавливать bg-secondary (1 час)
    * [ ] бордюр между блоками

* [x] вместо pb96 и pt96 сделать BML-section-padding

## Пожелалки

* [ ] smoothscroll - https://github.com/fisshy/react-scroll,
    https://github.com/alicelieutier/smoothScroll
* [ ] в схеме HeaderList использовать поле типа StringsList для редактирования
    списка в одном textarea через пробел
* [ ] Возможность редавтирокть HeaderList из просмотра
* [ ] Во StringEditable (а может и RichEditable) превращать перевод строки в
    <br>
* [ ] В Preview режиме использовать стили viewer, а не editor
* [ ] Описать initialState в ветках (начиная с reducers/application) (30 минут, сложно)
* [ ] text-align регулируется через форму (может через допклассы)
* [ ] Скрывать OperatorPanel если мы редактируем в Redactor
* [ ] Добавить тестирование пререндера на teamcity
* [ ] Централизованное управление CTA
