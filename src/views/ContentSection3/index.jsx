import React from 'react';

import applyType from 'views/types/apply';

import ViewContainer from 'views/elements/ViewContainer';

import Buttons from 'views/elements/Buttons';
import StringEditable from 'views/elements/StringEditable';

import './index.css';

/* eslint-disable react/prop-types */
const ContentSection3 = ({ block }) => (
  <ViewContainer block={block} className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <StringEditable
            data={block.content}
            className="color-primary"
            fieldName="text"
            tagName="h2"
          />
        </div>
        <div className="col-lg-6">
          <Buttons buttons={block.content.items} className="CTA1-social-buttons" />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.textWithLinks(ContentSection3);
