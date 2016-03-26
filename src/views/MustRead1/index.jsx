import React from 'react';
import applyType from 'views/types/apply';

import Buttons from 'views/elements/Buttons';
import StringEditable from 'views/elements/StringEditable';
import ViewContainer from 'views/elements/ViewContainer';

import './index.css';

/* eslint-disable react/prop-types */
const MustRead1 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--height-70">
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-md-7">
          <StringEditable
            element={React.DOM.h2}
            path="header"
            className="BML-h2 color-primary"
          />
          <StringEditable
            element={React.DOM.h2}
            path="subheader"
            className="lead color-primary mb40"
          />
          <Buttons buttons={block.content.items} className="mt40" />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.mustRead(MustRead1);
