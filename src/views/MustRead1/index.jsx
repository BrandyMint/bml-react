import React from 'react';

import applyType from 'views/types/apply';

import Buttons from 'views/elements/Buttons';
import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

import './index.css';

const MustRead1 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--height-70">
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-lg-12">
          <div className="MustRead1-message">
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
    </div>
  </ViewContainer>
);

export default applyType.MustRead(MustRead1);
