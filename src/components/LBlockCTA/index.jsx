import React, { Component, PropTypes } from 'react';

import LBlockCTAV1 from './LBlockCTAV1';

const viewComponents = {
  LBlockCTAV1,
};

const LBlockCTA = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="LBlockCTA">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of LBlockCTA {view}</span>
      }
    </div>
  );
};

LBlockCTA.propTypes = {
  view: PropTypes.string,
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    backgroundImageUrl: PropTypes.string,
    items: PropTypes.array.isRequired,
  }),
};

export default LBlockCTA;