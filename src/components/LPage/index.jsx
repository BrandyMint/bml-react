import React, { Component, PropTypes } from 'react';

import LBlockList from 'components/LBlockList';

class LPage extends Component {
  state = {
    blocks: this.props.blocks,
    data: this.props.data,
  };
  render() {
    return (
      <div className="LPage">
        <div className="LPage-content">
          <LBlockList {...this.state} />
        </div>
      </div>
    );
  }
}

LPage.propTypes = {
  blocks: PropTypes.array,
  data: PropTypes.object,
};

LPage.defaultProps = {
  data: {
    weq23: {
      header: 'Hello',
      subheader: 'My little friend!',
    },
    weq3: {
      header: 'Hello2',
      subheader: 'My little friend2!',
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
        height: 458,
        width: 302,
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
      type: 'LBlockHeader',
      view: 'LBlockHeaderV1',
    },
    {
      uuid: 'weq3',
      type: 'LBlockHeader',
      view: 'LBlockHeaderV2',
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