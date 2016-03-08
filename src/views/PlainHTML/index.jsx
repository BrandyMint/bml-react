import React from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'components/shared/ViewContainer';

const PlainHTML = ({ block }) => (
  <ViewContainer block={ block }>
    <div dangerouslySetInnerHTML={{ __html: block.content.html }} />
  </ViewContainer>
);

export default applyType.PlainHTML(PlainHTML);
