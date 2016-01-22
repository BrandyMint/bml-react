import React, { Component, PropTypes } from 'react';

import get from 'lodash/get';
import map from 'lodash/map';
import bind from 'lodash/bind';
import size from 'lodash/size';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';

import VIEWS from 'constants/views';

import OperatorPanel from 'components/OperatorPanel';
import LBlockList from 'components/LBlockList';

class LPage extends Component {
  constructor(props) {
    super(props);

    this.downBlockPosition = bind(this.downBlockPosition, this);
    this.switchNextView = bind(this.switchNextView, this);
    this.switchPrevView = bind(this.switchPrevView, this);
    this.upBlockPosition = bind(this.upBlockPosition, this);

    this.state = {
      blocks: props.blocks,
      data: props.data,
    };
  }
  upBlockPosition(uuid) {
    const { blocks } = this.state;
    const blockIndex = findIndex(blocks, { uuid });
    const prevBlockIndex = blockIndex - 1;

    if (blockIndex) {
      const newBlocks = [...blocks];
      const block = newBlocks[blockIndex];
      newBlocks[blockIndex] = newBlocks[prevBlockIndex];
      newBlocks[prevBlockIndex] = block;

      this.setState({ blocks: newBlocks }); 
    }
  }
  downBlockPosition(uuid) {
    const { blocks } = this.state;
    const blockIndex = findIndex(blocks, { uuid });
    const nextBlockIndex = blockIndex + 1;

    if (size(blocks) > nextBlockIndex) {
      const newBlocks = [...blocks];
      const block = newBlocks[blockIndex];
      newBlocks[blockIndex] = newBlocks[nextBlockIndex];
      newBlocks[nextBlockIndex] = block;

      this.setState({ blocks: newBlocks }); 
    }
  }
  switchNextView(uuid) {
    const nextBlocks = map(this.state.blocks, (block) => {
      if (block.uuid === uuid) {
        const views = get(VIEWS, block.type);
        const viewsCount = size(views);

        if (viewsCount > 1) {
          const view = block.view;
          const viewIndex = findIndex(views, { view });
          const nextViewIndex = viewIndex + 1 !== viewsCount ? viewIndex + 1 : 0;
          const nextView = get(views, nextViewIndex);

          return {
            ...block,
            view: nextView.view,
          };
        }
      }

      return block;
    });

    this.setState({ blocks: nextBlocks });
  }
  switchPrevView(uuid) {
    const nextBlocks = map(this.state.blocks, (block) => {
      if (block.uuid === uuid) {
        const views = get(VIEWS, block.type);
        const viewsCount = size(views);

        if (viewsCount > 1) {
          const view = block.view;
          const viewIndex = findIndex(views, { view });
          const prevViewIndex = viewIndex <= 0 ? viewsCount - 1 : viewIndex - 1;
          const prevView = get(views, prevViewIndex);

          return {
            ...block,
            view: prevView.view,
          };
        }
      }

      return block;
    });

    this.setState({ blocks: nextBlocks });
  }
  render() {
    return (
      <div className="LPage">
        <div className="LPage-operator">
          <OperatorPanel exitUrl={this.props.exitUrl} />
        </div>
        <div className="LPage-content">
          <LBlockList
            {...this.state}
            isEditMode
            onBlockPositionDown={this.downBlockPosition}
            onBlockPositionUp={this.upBlockPosition}
            onViewSwitchNext={this.switchNextView}
            onViewSwitchPrev={this.switchPrevView}
          />
        </div>
      </div>
    );
  }
}

LPage.propTypes = {
  exitUrl: PropTypes.string,
  blocks: PropTypes.array,
  data: PropTypes.object,
};

LPage.defaultProps = {
  exitUrl: 'google.ru',
  data: {
    weq23: {
      header: 'Hello',
      subheader: 'My little friend!',
      backgroundImageUrl: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/intro-bg.jpg',
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
    tko: {
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
    hello: {
      headerText: 'Death to the Stock Photo: <br /> Special Thanks;)',
      leadText: 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.',
      image: {
        url: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/ipad.png',
        height: 354,
        width: 458,
      },
    },
    hellov2: {
      headerText: '3D Device Mockups <br /> by PSDCovers',
      leadText: 'Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!',
      image: {
        url: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/dog.png',
        height: 383,
        width: 458,
      },
    },
    hello2323: {
      headerText: 'Google Web Fonts and<br>Font Awesome Icons',
      leadText: 'This template features the \'Lato\' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.',
      image: {
        url: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/phones.png',
        height: 302,
        width: 458,
      },
    },
    ctaMyBad: {
      text: 'Connect to BML landings:',
      backgroundImageUrl: 'http://ironsummitmedia.github.io/startbootstrap-landing-page/img/banner-bg.jpg',
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
    myFooter: {
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
  blocks: [
    {
      uuid: 'tko',
      type: 'LBlockNavbar',
      view: 'LBlockNavbarV1',
    },
    {
      uuid: 'weq23',
      type: 'LBlockMustRead',
      view: 'LBlockMustReadV1',
    },
    {
      uuid: 'hello',
      type: 'LBlockContentSection',
      view: 'LBlockContentSectionV1',
    },
    {
      uuid: 'hellov2',
      type: 'LBlockContentSection',
      view: 'LBlockContentSectionV2',
    },
    {
      uuid: 'hello2323',
      type: 'LBlockContentSection',
      view: 'LBlockContentSectionV1',
    },
    {
      uuid: 'ctaMyBad',
      type: 'LBlockCTA',
      view: 'LBlockCTAV1',
    },
    {
      uuid: 'myFooter',
      type: 'LBlockFooter',
      view: 'LBlockFooterV1',
    },
  ],
};

export default LPage;