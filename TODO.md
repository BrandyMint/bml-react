## Цель:

* [ ] BM-овский лендос в дизайне

## Вопросы:

* [ ] Как правильно сделать backgroundResolver (aleksxor)

## Интерфейс:

* [x] Множественные кнопки в ContentSection
* [x] Привести ContentSection1-3 к нормальному виду в десктопе
* [x] возможность заменить изображение на прямой URL
* [x] Form1
* [x] Тестовый Лендос с примером ВСЕХ вьюх.
* [ ] Мобильные варианты для всех вьюх (ContentSection в первую очередь)
* [ ] Buttons в мобильном варианте
* [x] Автоматическое вычисление стиля фона
* [ ] MustRead1/2
    * [x] С видео
    * [x] с Изображением
    * [ ] Темный фон
    * [x] Светлый фон
    * [x] Заменить кнопки на Buttons

## Refactor (CSS)

* [ ] подключить стили к form-control вместо input
* [ ] использовать button submit вместо input submit
* [ ] Выделить media query в переменные или миксины (15 минут, легко)

## Refactor (JS)

* [ ] возможно заменить CTA на ContentSection (то есть удалить CTA), либо
    сделать в ней паддинг
* [ ] всякие buttons и items переименовать в links и сделать отдельным свойствов
    в block
* [x] заменить bg-image на BML-section--bgImage, dark на BML-section--dark
* [.] разбить типы на разные файлы и починить наличие block-а в props-ах во views (30 минут, легко)
* [ ] Избавиться от typeName в views/types, уставливать его автоматически при
    импорте
* [ ] разобраться с customPropType
* [x] В SectionComponent передавать block отдельным полем, а не размазанным
* [x] rename BlockView ViewComponent
* [x] ЗАменить LPage в стилях на BML-section с целью уменьшения глубины путей в CSS
* [x] BML-section-padding заменить на BML-section--padding. (5 минут, легко)
* [x] Переименовать block.view во viewName
* [ ] InlineForm, восстановить и перевести на ContentForm


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
