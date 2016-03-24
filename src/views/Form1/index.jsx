import React from 'react';
import ViewContainer from 'views/elements/ViewContainer';
import applyType from 'views/types/apply';

import RichEditable from 'views/elements/RichEditable';

import ContentForm from 'views/elements/ContentForm';

/* eslint-disable react/prop-types */
const Form1 = ({ block }) =>
(
  <ViewContainer block={block} className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-5 col-md-offset-1">
          <RichEditable
            data={block.content}
            className="headers-margin-top"
            fieldName="text"
            tagName="div"
          />
        </div>
        <div className="col-sm-6 col-md-4 col-md-offset-1">
          <ContentForm {...block.form} className="form-stack" />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.formWithText(Form1);
