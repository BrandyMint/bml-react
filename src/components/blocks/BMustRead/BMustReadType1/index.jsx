import React, { PropTypes } from 'react';

import { MUST_READ_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BMustReadType1View1 from './BMustReadType1View1';

const viewComponents = {
  [MUST_READ_TYPE1_VIEW1]: BMustReadType1View1,
};

const BMustReadType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BMustReadType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BMustReadType1 {view}</span>
      }
    </div>
  );
};

BMustReadType1.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    items: PropTypes.array.isRequired,
  }),
  view: PropTypes.string,
};

export default BMustReadType1;
