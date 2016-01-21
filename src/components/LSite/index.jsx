import React, { Component, PropTypes } from 'react';

import LBlockList from 'components/LBlockList';

const LSite = ({ blocks, data }) => (
  <div className="LPage">
    <div className="LPage-content">
      <LBlockList
        blocks={blocks}
        data={data}
        isEditMode={false}
      />
    </div>
  </div>
);

LSite.propTypes = {
  blocks: PropTypes.array,
  data: PropTypes.object,
};

LSite.defaultProps = {
  blocks: [],
  data: {},
};

export default LSite;