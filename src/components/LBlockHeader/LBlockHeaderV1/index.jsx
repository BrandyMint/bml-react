import React, { Component, PropTypes } from 'react';

import './LBlockHeaderV1.css';

const LBlockHeaderV1 = ({ header, subheader }) => {
  return (
    <div className="LBlockHeaderV1">
      <div className="LBlockHeaderV1-header">
        {header}
      </div>
      <div className="LBlockHeaderV1-subheader">
        {subheader}
      </div>
    </div>
  );
};

LBlockHeaderV1.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};

export default LBlockHeaderV1;