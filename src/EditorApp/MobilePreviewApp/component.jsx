/* global __ENV__ */

import React, { PropTypes } from 'react';
import BodyClassName from 'react-body-classname';
import ShowApp from 'ShowApp';

import ReactTooltip from 'react-tooltip';

import Frame from 'react-frame-component';
import TopToolbar from 'EditorApp/TopToolbar';
import { MOBILE_PREVIEW_MODE } from 'EditorApp/TopToolbar/modes';

import './index.css';

const ViewerStyleUrl = '/dist/viewer.css';
const FontsStyleUrl = '/dist/fonts.css';


// В development-е используем обычный iframe
// чтобы нормально подгужались актуальные стили
// В production-e используем Frame чтобы небыло паузы при загрузке
//
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
        <TopToolbar mode={MOBILE_PREVIEW_MODE} />
        <ReactTooltip />
      </div>
    </BodyClassName>
  );
};

App.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default App;
