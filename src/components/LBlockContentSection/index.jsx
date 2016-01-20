import React, { Component, PropTypes } from 'react';

import LBlockContentSectionV1 from './LBlockContentSectionV1';
import LBlockContentSectionV2 from './LBlockContentSectionV2';

const viewComponents = {
  LBlockContentSectionV1,
  LBlockContentSectionV2,
};

const LBlockContentSection = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="LBlockContentSection">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of LBlockContentSection {view}</span>
      }
    </div>
  );
};

LBlockContentSection.propTypes = {
  view: PropTypes.string,
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    leadText: PropTypes.string,
    image: PropTypes.object,
  }),
};

export default LBlockContentSection;