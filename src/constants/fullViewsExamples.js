import uuid from 'uuid';
import { viewsList } from 'views/all';
import { map, keys, mapKeys, flatten, size, compact } from 'lodash';

export const FULL_VIEWS_EXAMPLES_UUID = 'fullViewsExamples';

const mapSections = (viewName, sections) =>
  map(
    sections,
    (section) => ({ ...section, view: viewName, uuid: uuid.v4() })
  )

export const FULL_VIEWS_EXAMPLES_SECTIONS = flatten(
  compact(
    map(
      keys(viewsList),
      (viewName, index) =>
        mapSections(
          viewName,
          require('views/' + viewName + '/examples.js').sections
        )
    )
  )
);

const some = [
  /*
  {
    uuid: '44086800-a7e8-0133-a838-746d04736cf8',
    view: 'Navbar1',
    isTopNav: true,
    content: {
      logoLink: {
        text: '8 (800) 77-55-661',
        href: 'tel:88007755661',
      },
      items: [
        {
          text: 'О нас',
          href: '#',
        },
        {
          text: 'Услуги',
          href: '#',
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
  */
  //{
    //uuid: '440c3460-a7e8-0133-b838-746d04736cf8',
    //view: 'InlineForm1',
    //content: {
      //title: 'Подписка',
    //},
    //form: {
      //submitTitle: 'Подписаться',
      //fields: [
        //{
          //title: '',
          //placeholder: 'Имя',
          //key: 'name',
          //inputType: 'text',
        //},
        //{
          //title: '',
          //placeholder: 'Емайл',
          //key: 'email',
          //inputType: 'email',
        //},
      //],
    //},
    //nodeAttributes: {},
    //meta: {},
  //},
  //{
    //uuid: '440c3460-a7e8-0133-a838-746d04736cf8',
    //view: 'ContentSection1',
    //content: {
      //header: 'Отдельное спасибо <br />Death to the Stock Photo !',
      //leadText: 'Отдельное спасибо <a target=\'_blank\' href=\'http://join.deathtothestockphoto.com/\'>Death to the Stock Photo</a> за предоставленные фотографии которые Вы видите в этом шаблоне. <br />Посетите их сайт и получите доступ к огрмному количеству качественных фото.',
      //image: {
        //url: '/assets/images/themes/t1/ipad.png',
        //height: 354,
        //width: 458,
      //},
    //},
    //backgroundImage: {
    //},
    //nodeAttributes: {
      //id: '44086800-a7e8-0133-a838-',
      //class: '',
    //},
    //meta: {},
  //},
  //{
    //uuid: '440bb620-a7e8-0133-a838-746d04736cf8',
    //view: 'MustRead1',
    //content: {
      //header: 'На все 100%',
      //subheader: 'Шаблон для посадочной страницы',
      //items: [
        //{
          //icon: 'twitter',
          //title: 'Twitter',
          //url: 'twitter.com',
        //},
        //{
          //icon: 'github',
          //title: 'GitHub',
          //url: 'github.com',
        //},
      //],
    //},
    //backgroundImage: {
      //uuid: null,
      //url: '/assets/images/themes/t1/intro-bg.jpg',
      //width: null,
      //height: null,
    //},
    //nodeAttributes: {
      //id: '44086800-a7e8-013',
      //class: '',
    //},
    //meta: {},
  //},
  //{
    //uuid: '440c9d50-a7e8-0133-a838-746d04736cf8',
    //view: 'ContentSection2',
    //content: {
      //header: '3D макеты на предметах<br /> от PSDCovers',
      //leadText: 'Преврати свой двумерный дизайн в высококачественные, трехмерные снимки за секунды используя бесплатные экшены в Photoshop от <a target=\'_blank\' href=\'http://www.psdcovers.com/\'>PSDCovers</a>!<br />Посетите их сайт чтобы скачать что-то восхитительное и увидить экшены в действии!',
      //image: {
        //url: '/assets/images/themes/t1/dog.png',
        //height: 383,
        //width: 458,
      //},
    //},
    //backgroundImage: {
    //},
    //nodeAttributes: {
      //id: '44086800-a7e8-0133-a838-746d0473',
      //class: '',
    //},
    //meta: {},
  //},
  //{
    //uuid: '440d06f0-a7e8-0133-a838-746d04736cf8',
    //view: 'ContentSection1',
    //content: {
      //header: 'Шрифты Google Web и<br>иконки Font Awesome',
      //leadText: 'Этот шаблон применяет \'Lato\' шрифт, часть <a target=\'_blank\' href=\'http://www.google.com/fonts\'>библиотеки Google Web Font</a>, также как и <a target=\'_blank\' href=\'http://fontawesome.io\'>иконки из Font Awesome</a>.',
      //image: {
        //url: '/assets/images/themes/t1/phones.png',
        //height: 302,
        //width: 458,
      //},
    //},
    //backgroundImage: {
    //},
    //nodeAttributes: {
      //id: '44086800-a7e8-0133-746d04736cf8',
      //class: '',
    //},
    //meta: {},
  //},
  //{
    //uuid: '440d6ea0-a7e8-0133-a838-746d04736cf8',
    //view: 'CTA1',
    //content: {
      //text: 'Присоединяйся к нам в соцсетях!',
      //items: [
        //{
          //icon: 'twitter',
          //title: 'Twitter',
          //url: 'twitter.com',
        //},
        //{
          //icon: 'github',
          //title: 'GitHub',
          //url: 'github.com',
        //},
      //],
    //},
    //backgroundImage: {
      //uuid: null,
      //url: '/assets/images/themes/t1/banner-bg.jpg',
      //width: null,
      //height: null,
    //},
    //nodeAttributes: {
      //id: '44086800-a7e8-013asd3-746d04736cf8',
      //class: '',
    //},
    //meta: {},
  //},
  //{
    //uuid: '44086800-a7e8-0133-a838-646d04736cf8',
    //view: 'GoogleMap1',
    //content: {
      //center: {
        //lat: 59.938043,
        //lng: 30.337157,
      //},
      //zoom: 9,
      //places: [
        //{
          //location: {
            //lat: 59.955413,
            //lng: 30.337844,
          //},
          //title: 'A',
        //},
        //{
          //location: {
            //lat: 59.724465,
            //lng: 30.080121,
          //},
          //title: 'B',
        //},
      //],
    //},
    //nodeAttributes: {},
    //meta: {},
  //},
  //{
    //uuid: '440ddca0-a7e8-0133-a838-746d04736cf8',
    //view: 'Footer1',
    //content: {
      //copyrightText: 'Copyright © BML landing 2016. All Rights Reserved',
      //items: [
        //{
          //title: 'Домой',
          //url: '#top',
        //},
        //{
          //title: 'О нас',
          //url: '#about',
        //},
        //{
          //title: 'Услуги',
          //url: '#services',
        //},
      //],
    //},
    //backgroundImage: {
    //},
    //nodeAttributes: {
      //id: '44086800-a7e8-013asd3-746d04736cf8',
      //class: '',
    //},
    //meta: {},
  //},
];
