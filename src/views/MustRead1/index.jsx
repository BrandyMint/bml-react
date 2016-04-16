import React from 'react';
import applyType from 'views/types/apply';

import EditableButtons from 'views/elements/EditableButtons';
import Editable from 'views/elements/Editable';
import ViewContainer from 'views/elements/ViewContainer';
import { RICH_OPTIONS } from 'views/elements/Editable/options';

import './index.css';

/* eslint-disable react/prop-types */
const MustRead1 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--height-70">
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-md-7">
          <Editable
            element="h2"
            path="header"
            className="BML-h2 color-primary"
            options={RICH_OPTIONS}
          />
          <Editable
            element="p"
            path="subheader"
            className="lead color-primary mb40"
            options={RICH_OPTIONS}
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

export default applyType.mustRead(MustRead1);
