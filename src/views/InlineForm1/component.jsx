import React from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'components/shared/ViewContainer';

import ContentForm from 'views/elements/ContentForm';
import RichEditable from 'components/primitives/RichEditable';

import './index.css';

const InlineForm1 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--padding text-center">
    <div className="container">
      <RichEditable
        className="lead mb40"
        data={block.content}
        fieldName="text"
        tagName="div"
      />
    </div>
    <ContentForm {...block.form} className="form-inline" />
  </ViewContainer>
);

export default applyType.formWithText(InlineForm1);
