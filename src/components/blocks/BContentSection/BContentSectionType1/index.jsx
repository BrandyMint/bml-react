import React, { Component, PropTypes } from 'react';

import {
  CONTENT_SECTION_TYPE1_VIEW1,
  CONTENT_SECTION_TYPE1_VIEW2,
  CONTENT_SECTION_TYPE1_VIEW3,
} from 'constants/blockViewsKeys';

import BContentSectionType1View1 from './BContentSectionType1View1';
import BContentSectionType1View2 from './BContentSectionType1View2';
import BContentSectionType1View3 from './BContentSectionType1View3';

const viewComponents = {
  [CONTENT_SECTION_TYPE1_VIEW1]: BContentSectionType1View1,
  [CONTENT_SECTION_TYPE1_VIEW2]: BContentSectionType1View2,
  [CONTENT_SECTION_TYPE1_VIEW3]: BContentSectionType1View3,
};

const BContentSectionType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BContentSectionType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BContentSectionType1 {view}</span>
      }
    </div>
  );
};

BContentSectionType1.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    leadText: PropTypes.string,
    image: PropTypes.object,
  }),
  view: PropTypes.string,
};

export default BContentSectionType1;