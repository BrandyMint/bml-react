import React, { PropTypes } from 'react';

import { FOOTER_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BFooterType1View1 from './BFooterType1View1';

const viewComponents = {
  [FOOTER_TYPE1_VIEW1]: BFooterType1View1,
};

const BFooterType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BFooterType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BFooterType1 {view}</span>
      }
    </div>
  );
};

BFooterType1.propTypes = {
  data: PropTypes.shape({
    copyrightText: PropTypes.string,
    items: PropTypes.array.isRequired,
  }),
  view: PropTypes.string,
};

export default BFooterType1;
