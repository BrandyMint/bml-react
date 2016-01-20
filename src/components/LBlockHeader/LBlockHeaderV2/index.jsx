import React, { Component, PropTypes } from 'react';

import './LBlockHeaderV2.css';

const LBlockHeaderV2 = ({ header, subheader }) => {
  return (
    <div className="LBlockHeaderV2">
      <div className="LBlockHeaderV2-subheader">
        {subheader}
      </div>
      <div className="LBlockHeaderV2-header">
        {header}
      </div>
    </div>
  );
}

LBlockHeaderV2.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};

export default LBlockHeaderV2;