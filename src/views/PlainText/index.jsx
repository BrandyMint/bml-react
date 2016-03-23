import React from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'components/shared/ViewContainer';

import RichEditable from 'components/primitives/RichEditable';

/* eslint-disable react/prop-types */
const PlainText = ({ block }) => (
  <ViewContainer block={ block }>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <RichEditable
            className="Text"
            data={block.content}
            fieldName="text"
            tagName="div"
          />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType.plainText(PlainText);
