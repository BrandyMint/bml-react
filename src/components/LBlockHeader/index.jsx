import React, { Component, PropTypes } from 'react';

import './LBlockHeader.css';

import LBlockHeaderV1 from './LBlockHeaderV1';
import LBlockHeaderV2 from './LBlockHeaderV2';

const viewComponents = {
  'LBlockHeaderV1': LBlockHeaderV1,
  'LBlockHeaderV2': LBlockHeaderV2,
};

const LBlockHeader = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="LBlockHeader">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of LBlockHeader {view}</span>
      }
    </div>
  );
};

LBlockHeader.propTypes = {
  view: PropTypes.string,
  data: PropTypes.shape({
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
  }),
};

export default LBlockHeader;