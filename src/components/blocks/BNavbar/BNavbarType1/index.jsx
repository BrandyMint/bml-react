import React, { PropTypes } from 'react';

import { NAVBAR_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BNavbarType1View1 from './BNavbarType1View1';

const viewComponents = {
  [NAVBAR_TYPE1_VIEW1]: BNavbarType1View1,
};

const BNavbarType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BNavbarType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BNavbarType1 {view}</span>
      }
    </div>
  );
};

BNavbarType1.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array,
    logoText: PropTypes.string.isRequired,
  }),
  view: PropTypes.string,
};

export default BNavbarType1;
