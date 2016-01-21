import React, { Component, PropTypes } from 'react';

import LBlockMustReadV1 from './LBlockMustReadV1';

const viewComponents = {
  LBlockMustReadV1,
};

const LBlockMustRead = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="LBlockMustRead">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of LBlockMustRead {view}</span>
      }
    </div>
  );
};

LBlockMustRead.propTypes = {
  view: PropTypes.string,
  data: PropTypes.shape({
    backgroundImageUrl: PropTypes.string,
    header: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    subheader: PropTypes.string,
  }),
};

export default LBlockMustRead;