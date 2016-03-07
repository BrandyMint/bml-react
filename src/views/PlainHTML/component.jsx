import React from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import ViewContainer from 'components/shared/ViewContainer';

const PlainHTML = ({ block }) => (
  <ViewContainer block={ block }>
    <div dangerouslySetInnerHTML={{ __html: block.content.html }} />
  </ViewContainer>
);

export default applyType(PlainHTML, Types.PlainHtml);
