import React, { PropTypes } from 'react';

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

BContentSectionType1.contentSchema = {
  version: 1,
  backgroundImage: true,
  fields: [
    {
      title: 'Заголовок',
      key: 'headerText',
      type: 'string',
      isRequired: true,
    },
    {
      title: 'Описание',
      key: 'leadText',
      type: 'text',
      isRequired: true,
    },
    {
      title: 'Картинка',
      key: 'image',
      type: 'image',
      isRequired: true,
    },
  ],
};

BContentSectionType1.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    image: PropTypes.object,
    leadText: PropTypes.string,
  }),
  view: PropTypes.string,
};

export default BContentSectionType1;
