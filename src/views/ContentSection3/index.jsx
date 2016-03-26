import React from 'react';

import applyType from 'views/types/apply';

import ViewContainer from 'views/elements/ViewContainer';

import EditableButtons from 'views/elements/EditableButtons';
import Editable from 'views/elements/Editable';

import './index.css';

/* eslint-disable react/prop-types */
const ContentSection3 = ({ block }) => (
  <ViewContainer block={block} className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Editable
            element="h2"
            path="text"
            className="color-primary"
          />
        </div>
        <div className="col-lg-6">
          <EditableButtons path="items" className="CTA1-social-buttons" />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.textWithLinks(ContentSection3);
