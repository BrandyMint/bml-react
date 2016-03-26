import React from 'react';
import applyType from 'views/types/apply';

import EditableButtons from 'views/elements/EditableButtons';
import Editable from 'views/elements/Editable';
import ViewContainer from 'views/elements/ViewContainer';

import './index.css';

/* eslint-disable react/prop-types */
const MustRead2 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--height-70">
    <div className="container vertical-center-rel text-right">
      <div className="row">
        <div className="col-md-7 col-md-offset-5">
          <Editable
            element="h2"
            path="header"
            className="BML-h2 color-primary"
          />
          <Editable
            element="p"
            path="subheader"
            className="lead color-primary mb40"
          />
          <EditableButtons
            path="items"
            className="mt40"
          />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.mustRead(MustRead2);
