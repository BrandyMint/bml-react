// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import map from 'lodash/map';

import Buttons from 'views/elements/Buttons';
import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

import './index.css';

const MustRead2 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--height-70">
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-md-7">
          <StringEditable
            className="BML-h2 color-primary"
            data={block.content}
            fieldName="header"
            tagName="h2"
          />
          <StringEditable
            className="BML-lead lead color-primary mb40"
            data={block.content}
            fieldName="subheader"
            tagName="p"
          />
          <Buttons buttons={block.content.items} className="mt40"/>
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType(MustRead2, Types.mustRead);
