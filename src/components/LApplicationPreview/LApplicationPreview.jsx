import React, {  PropTypes } from 'react';

import BubblePanel from './BubblePanel';
import ShowApplication from 'components/ShowApplication';

const PreviewApp = () => (
  <ShowApplication className="BML-AppPreview">
    <BubblePanel />
  </ShowApplication>
);


export default PreviewApp;
