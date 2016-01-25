import createReducer from 'helpers/createReducer';

import map from 'lodash/map';
import size from 'lodash/size';
import assign from 'lodash/assign';
import findIndex from 'lodash/findIndex';

import BLOCK_VIEWS from 'constants/blockViews';

import {
  DOWN_BLOCK_POSITION, UP_BLOCK_POSITION, SWITCH_NEXT_VIEW, SWITCH_PREV_VIEW,
  SUBMIT_ADDING_BLOCK,
} from 'actions/blocks';

import {
  CONTENT_SECTION_TYPE1, CTA_TYPE1, FOOTER_TYPE1, MUST_READ_TYPE1, NAVBAR_TYPE1,
} from 'constants/blockTypesKeys';

import {
  CONTENT_SECTION_TYPE1_VIEW1,
  CONTENT_SECTION_TYPE1_VIEW2,
  CONTENT_SECTION_TYPE1_VIEW3,

  CTA_TYPE1_VIEW1,

  FOOTER_TYPE1_VIEW1,

  MUST_READ_TYPE1_VIEW1,

  NAVBAR_TYPE1_VIEW1,
} from 'constants/blockViewsKeys';

const initialState = [
  {
    uuid: 'tko',
    type: NAVBAR_TYPE1,
    view: NAVBAR_TYPE1_VIEW1,
    data: {
      logoText: 'BML theme',
      items: [
        {
          title: 'About',
          url: 'google.ru',
        },
        {
          title: 'Services',
          url: 'services.ru',
        },
      ],
    },
  },
  {
    uuid: 'weq23',
    type: MUST_READ_TYPE1,
    view: MUST_READ_TYPE1_VIEW1,
    data: {
      header: 'Hello',
      subheader: 'My little friend!',
      backgroundImageUrl: '/images/themes/t1/intro-bg.jpg',
      items: [
        {
          title: 'Twitter',
          icon: 'twitter',
          url: 'twitter.com',
        },
        {
          title: 'GitHub',
          icon: 'github',
          url: 'github.com',
        },
        {
          title: 'LinkedIn',
          icon: 'linkedin',
          url: 'linkedin.com',
        },
      ],
    },
  },
  {
    uuid: 'hello',
    type: CONTENT_SECTION_TYPE1,
    view: CONTENT_SECTION_TYPE1_VIEW1,
    data: {
      headerText: 'Death to the Stock Photo: <br /> Special Thanks;)',
      leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
      image: {
        url: '/images/themes/t1/ipad.png',
        height: 354,
        width: 458,
      },
    },
  },
  {
    uuid: 'hellov2',
    type: CONTENT_SECTION_TYPE1,
    view: CONTENT_SECTION_TYPE1_VIEW2,
    data: {
      headerText: '3D Device Mockups <br /> by PSDCovers',
      leadText: 'Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!',
      image: {
        url: '/images/themes/t1/dog.png',
        height: 383,
        width: 458,
      },
    },
  },
  {
    uuid: 'hello2323',
    type: CONTENT_SECTION_TYPE1,
    view: CONTENT_SECTION_TYPE1_VIEW3,
    data: {
      headerText: 'Google Web Fonts and<br>Font Awesome Icons',
      leadText: 'This template features the \'Lato\' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.',
      image: {
        url: '/images/themes/t1/phones.png',
        height: 302,
        width: 458,
      },
    },
  },
  {
    uuid: 'ctaMyBad',
    type: CTA_TYPE1,
    view: CTA_TYPE1_VIEW1,
    data: {
      text: 'Connect to BML landings:',
      backgroundImageUrl: '/images/themes/t1/banner-bg.jpg',
      items: [
        {
          title: 'Twitter',
          url: 'twitter.com',
        },
        {
          title: 'GitHub',
          url: 'github.com',
        },
      ],
    },
  },
  {
    uuid: 'myFooter',
    type: FOOTER_TYPE1,
    view: FOOTER_TYPE1_VIEW1,
    data: {
      copyrightText: 'Copyright © BML landing 2016. All Rights Reserved',
      items: [
        {
          title: 'Home',
          url: '#',
        },
        {
          title: 'About',
          url: '#about',
        },
        {
          title: 'Services',
          url: '#services',
        },
      ],
    },
  },
];

const handlers = {
  [DOWN_BLOCK_POSITION]: (state, action) => {
    const { uuid } = action.payload;

    const blockIndex = findIndex(state, { uuid });
    const nextBlockIndex = blockIndex + 1;
    let newState = state;

    if (size(state) > nextBlockIndex) {
      newState = [...state];
      const block = newState[blockIndex];
      newState[blockIndex] = newState[nextBlockIndex];
      newState[nextBlockIndex] = block;
    }

    return newState;
  },

  [UP_BLOCK_POSITION]: (state, action) => {
    const { uuid } = action.payload;

    const blockIndex = findIndex(state, { uuid });
    const prevBlockIndex = blockIndex - 1;
    let newState = state;

    if (blockIndex) {
      newState = [...state];
      const block = newState[blockIndex];
      newState[blockIndex] = newState[prevBlockIndex];
      newState[prevBlockIndex] = block;
    }

    return newState;
  },

  [SWITCH_NEXT_VIEW]: (state, action) => {
    const { uuid } = action.payload;

    return map(state, (block) => {
      if (block.uuid === uuid) {
        const blockViews = BLOCK_VIEWS[block.type];
        const blockViewsCount = size(blockViews);

        if (blockViewsCount > 1) {
          const view = block.view;
          const viewIndex = findIndex(blockViews, { view });
          const nextViewIndex = viewIndex + 1 !== blockViewsCount ? viewIndex + 1 : 0;
          const nextView = blockViews[nextViewIndex];

          return {
            ...block,
            view: nextView.view,
          };
        }
      }

      return block;
    });
  },

  [SWITCH_PREV_VIEW]: (state, action) => {
    const { uuid } = action.payload;

    return map(state, (block) => {
      if (block.uuid === uuid) {
        const blockViews = BLOCK_VIEWS[block.type];
        const blockViewsCount = size(blockViews);

        if (blockViewsCount > 1) {
          const view = block.view;
          const viewIndex = findIndex(blockViews, { view });
          const prevViewIndex = viewIndex <= 0 ? blockViewsCount - 1 : viewIndex - 1;
          const prevView = blockViews[prevViewIndex];

          return {
            ...block,
            view: prevView.view,
          };
        }
      }

      return block;
    });
  },

  [SUBMIT_ADDING_BLOCK]: (state, action) => {
    const { block, position } = action.payload;
    const newState = [...state];
    newState.splice(position, 0, block)

    return newState;
  },
};

export default createReducer(initialState, handlers);