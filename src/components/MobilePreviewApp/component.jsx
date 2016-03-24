/* global __ENV__ */

import React, { PropTypes } from 'react';
import BodyClassName from 'react-body-classname';
import ShowApp from 'components/ShowApp';

import ReactTooltip from 'react-tooltip';

import PreviewToolbar from 'components/DesktopPreviewApp/PreviewToolbar';

import Frame from 'react-frame-component';

import './index.css';

const ViewerStyleUrl = '/dist/viewer.css';
const FontsStyleUrl = '/dist/fonts.css';


// В development-е используем обычный iframe
// чтобы нормально подгужались актуальные стили
//
// В продакшене используем Frame чтобы небыло паузы при загрузке
const useFrame = __ENV__ !== 'development';

// Специфика фотографии телефона
const IFRAME_WIDTH = 375;
const IFRAME_HEIGHT = 667;

const App = ({ variantUuid }) => {
  const src = `/editor/${variantUuid}/show`;

  const Screen = useFrame ? (
    <Frame
      className="Mobile-iframe"
      width={IFRAME_WIDTH}
      height={IFRAME_HEIGHT}
    >
      <link rel="stylesheet" media="all" href={ViewerStyleUrl} />
      <link rel="stylesheet" media="all" href={FontsStyleUrl} />
      <ShowApp className="BML-AppPreview" />
    </Frame>
  ) : (
  <iframe
    className="Mobile-iframe"
    width={IFRAME_WIDTH}
    height={IFRAME_HEIGHT}
    src={src}
  />
  );

  return (
    <BodyClassName className="MobilePreviewBody">
      <div className="MobilePreview">
        <div className="MobilePreview-viewport">
          {Screen}
        </div>
        <PreviewToolbar mobile />
        <ReactTooltip />
      </div>
    </BodyClassName>
  );
};

App.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default App;
