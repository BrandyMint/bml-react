import React, { PropTypes } from 'react';

const UnknownView = ({ view, uuid }) => (
  <div className="LBlock-placeholder">
    No such view {view} for block {uuid}
  </div>
);

UnknownView.propTypes = {
  view: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired,
}

export default UnknownView;
