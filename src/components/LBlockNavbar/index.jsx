import React, { Component, PropTypes } from 'react';

import LBlockNavbarV1 from './LBlockNavbarV1';

const viewComponents = {
  LBlockNavbarV1,
};

const LBlockNavbar = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="LBlockNavbar">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of LBlockNavbar {view}</span>
      }
    </div>
  );
};

LBlockNavbar.propTypes = {
  view: PropTypes.string,
  data: PropTypes.shape({
    logoText: PropTypes.string.isRequired,
    items: PropTypes.array,
  }),
};

export default LBlockNavbar;