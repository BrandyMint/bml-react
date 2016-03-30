import React from 'react';
import ViewContainer from 'views/elements/ViewContainer';
import applyType from 'views/types/apply';

import RichEditable from 'views/elements/RichEditable';

import ContentForm from 'views/elements/ContentForm';

/* eslint-disable react/prop-types */
const Form0 = ({ block }) =>
(
  <ViewContainer block={block} className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <RichEditable
            data={block.content}
            className="headers-margin-top"
            fieldName="text"
            tagName="div"
          />
        </div>
      </div>
      <div className="row mt40">
        <div className="col-md-6 col-md-offset-3">
          <ContentForm {...block.form} className="form-stack" />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.formWithText(Form0);
