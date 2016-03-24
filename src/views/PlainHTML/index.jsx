import React from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'views/elements/ViewContainer';

/* eslint-disable react/prop-types */
const PlainHTML = ({ block }) => (
  <ViewContainer block={ block }>
    <div dangerouslySetInnerHTML={{ __html: block.content.html }} />
  </ViewContainer>
);

export default applyType.plainHTML(PlainHTML);
