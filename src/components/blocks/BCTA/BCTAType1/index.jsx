import React, { PropTypes } from 'react';

import { CTA_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BCTAType1View1 from './BCTAType1View1';

const viewComponents = {
  [CTA_TYPE1_VIEW1]: BCTAType1View1,
};

const BCTAType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BCTAType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BCTAType1 {view}</span>
      }
    </div>
  );
};

BCTAType1.propTypes = {
  data: PropTypes.shape({
    backgroundImageUrl: PropTypes.string,
    items: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  }),
  view: PropTypes.string,
};

export default BCTAType1;