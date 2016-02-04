/* global __ENV__ */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'stylesheets/style.scss';

import createStore from 'store';

import LApplication from 'components/LApplication';

const initApp = (initialState) => {
  const store = createStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <LApplication />
    </Provider>,
    document.getElementById('content')
  );
};

if (__ENV__ === 'development') {
  initApp({
    addBlockForm: {
      selectedIndex: null,
      position: null,
    },
    application: {
      exitUrl: '/_a/landings/1/analytics',
      isEditMode: true,
      isSaving: false,
      landing_version_uuid: '10ba27fa-0628-44fd-af24-8430eea47ca7',
      api_key: '5d8aa2f240c5d05e992e0e84f58ce965',
      hasUnsavedChanges: false,
    },
    blocks: [
      {
        uuid: '44086800-a7e8-0133-a838-746d04736cf8',
        type: 'BNavbarType1',
        view: 'BNavbarType1View1',
        content: {
          logoText: 'Лендос!',
          items: [
            {
              title: 'О нас',
              url: 'google.ru',
            },
            {
              title: 'Услуги',
              url: 'services.ru',
            },
          ],
        },
        backgroundImage: {
        },
        nodeAttributes: {
          id: '44086800-a7e8-0133-a838-746d04736cf8',
          class: 'hello',
        },
        meta: {},
      },
      {
        uuid: '440bb620-a7e8-0133-a838-746d04736cf8',
        type: 'BMustReadType1',
        view: 'BMustReadType1View1',
        content: {
          header: 'На все 100%',
          subheader: 'Шаблон для посадочной страницы',
          items: [
            {
              icon: 'twitter',
              title: 'Twitter',
              url: 'twitter.com',
            },
            {
              icon: 'github',
              title: 'GitHub',
              url: 'github.com',
            },
          ],
        },
        backgroundImage: {
          uuid: null,
          url: '/assets/images/themes/t1/intro-bg.jpg',
          width: null,
          height: null,
        },
        nodeAttributes: {
          id: '44086800-a7e8-013',
          class: '',
        },
        meta: {},
      },
      {
        uuid: '440c3460-a7e8-0133-b838-746d04736cf8',
        type: 'BInlineFormType1',
        view: 'BInlineFormType1View1',
        content: {
          submitTitle: 'Подписка',
          fields: [
            {
              title: '',
              placeholder: 'Имя',
              key: 'name',
              inputType: 'text',
            },
            {
              title: '',
              placeholder: 'Емайл',
              key: 'email',
              inputType: 'email',
            },
          ],
        },
        nodeAttributes: {},
        meta: {},
      },
      {
        uuid: '440c3460-a7e8-0133-a838-746d04736cf8',
        type: 'BContentSectionType1',
        view: 'BContentSectionType1View1',
        content: {
          headerText: 'Отдельное спасибо <br />Death to the Stock Photo !',
          leadText: 'Отдельное спасибо <a target=\'_blank\' href=\'http://join.deathtothestockphoto.com/\'>Death to the Stock Photo</a> за предоставленные фотографии которые Вы видите в этом шаблоне. <br />Посетите их сайт и получите доступ к огрмному количеству качественных фото.',
          image: {
            url: '/assets/images/themes/t1/ipad.png',
            height: 354,
            width: 458,
          },
        },
        backgroundImage: {
        },
        nodeAttributes: {
          id: '44086800-a7e8-0133-a838-',
          class: '',
        },
        meta: {},
      },
      {
        uuid: '440c9d50-a7e8-0133-a838-746d04736cf8',
        type: 'BContentSectionType1',
        view: 'BContentSectionType1View2',
        content: {
          headerText: '3D макеты на предметах<br /> от PSDCovers',
          leadText: 'Преврати свой двумерный дизайн в высококачественные, трехмерные снимки за секунды используя бесплатные экшены в Photoshop от <a target=\'_blank\' href=\'http://www.psdcovers.com/\'>PSDCovers</a>!<br />Посетите их сайт чтобы скачать что-то восхитительное и увидить экшены в действии!',
          image: {
            url: '/assets/images/themes/t1/dog.png',
            height: 383,
            width: 458,
          },
        },
        backgroundImage: {
        },
        nodeAttributes: {
          id: '44086800-a7e8-0133-a838-746d0473',
          class: '',
        },
        meta: {},
      },
      {
        uuid: '440d06f0-a7e8-0133-a838-746d04736cf8',
        type: 'BContentSectionType1',
        view: 'BContentSectionType1View1',
        content: {
          headerText: 'Шрифты Google Web и<br>иконки Font Awesome',
          leadText: 'Этот шаблон применяет \'Lato\' шрифт, часть <a target=\'_blank\' href=\'http://www.google.com/fonts\'>библиотеки Google Web Font</a>, также как и <a target=\'_blank\' href=\'http://fontawesome.io\'>иконки из Font Awesome</a>.',
          image: {
            url: '/assets/images/themes/t1/phones.png',
            height: 302,
            width: 458,
          },
        },
        backgroundImage: {
        },
        nodeAttributes: {
          id: '44086800-a7e8-0133-746d04736cf8',
          class: '',
        },
        meta: {},
      },
      {
        uuid: '440d6ea0-a7e8-0133-a838-746d04736cf8',
        type: 'BCTAType1',
        view: 'BCTAType1View1',
        content: {
          text: 'Присоединяйся к нам в соцсетях!',
          items: [
            {
              icon: 'twitter',
              title: 'Twitter',
              url: 'twitter.com',
            },
            {
              icon: 'github',
              title: 'GitHub',
              url: 'github.com',
            },
          ],
        },
        backgroundImage: {
          uuid: null,
          url: '/assets/images/themes/t1/banner-bg.jpg',
          width: null,
          height: null,
        },
        nodeAttributes: {
          id: '44086800-a7e8-013asd3-746d04736cf8',
          class: '',
        },
        meta: {},
      },
      {
        uuid: '44086800-a7e8-0133-a838-646d04736cf8',
        type: 'BMapType1',
        view: 'BMapType1View1',
        content: {
          center: {
            lat: 59.938043,
            lng: 30.337157,
          },
          zoom: 9,
          places: [
            {
              location: {
                lat: 59.955413,
                lng: 30.337844,
              },
              title: 'A',
            },
            {
              location: {
                lat: 59.724465,
                lng: 30.080121,
              },
              title: 'B',
            },
          ],
        },
        nodeAttributes: {},
        meta: {},
      },
      {
        uuid: '440ddca0-a7e8-0133-a838-746d04736cf8',
        type: 'BFooterType1',
        view: 'BFooterType1View1',
        content: {
          copyrightText: 'Copyright © BML landing 2016. All Rights Reserved',
          items: [
            {
              title: 'Домой',
              url: '#top',
            },
            {
              title: 'О нас',
              url: '#about',
            },
            {
              title: 'Услуги',
              url: '#services',
            },
          ],
        },
        backgroundImage: {
        },
        nodeAttributes: {
          id: '44086800-a7e8-013asd3-746d04736cf8',
          class: '',
        },
        meta: {},
      },
    ],
    modal: {
      current: null,
    },
  });
}

global.initApp = initApp;
