import React, { Component, PropTypes } from 'react';

import LBlockFooterV1 from './LBlockFooterV1';

const viewComponents = {
  LBlockFooterV1,
};

const LBlockFooter = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="LBlockFooter">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of LBlockFooter {view}</span>
      }
    </div>
  );
};

LBlockFooter.propTypes = {
  view: PropTypes.string,
  data: PropTypes.shape({
    copyrightText: PropTypes.string,
    items: PropTypes.array.isRequired,
  }),
};

export default LBlockFooter;