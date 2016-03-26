import React from 'react';
import ViewContainer from 'views/elements/ViewContainer';
import applyType from 'views/types/apply';

import Image from 'views/elements/Image';

import EditableButtons from 'views/elements/EditableButtons';
import Editable from 'views/elements/Editable';
import { RICH_OPTIONS } from 'views/elements/Editable/options';

/* eslint-disable react/prop-types */
const ContentSection2 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
          <div className="clearfix" />
          <Editable
            element="h2"
            path="header"
            className="BML-h2 color-primary"
          />
          <Editable
            path="leadText"
            className="lead"
            options={RICH_OPTIONS}
          />
          <EditableButtons path="links" className="mt40" />
        </div>
        <div className="col-lg-5 col-sm-pull-6 col-sm-6">
          <Image {...block.content.image} />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.contentSection(ContentSection2);
