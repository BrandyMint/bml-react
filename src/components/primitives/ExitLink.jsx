import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createSelector } from 'reselect';

import ExitIcon from 'react-icons/lib/go/graph';

const ExitLink = ({ exitUrl }) => (
  <Link to={exitUrl} className="IconLink">
    <ExitIcon />
  </Link>
);

ExitLink.propTypes = {
  exitUrl: PropTypes.string.isRequired,
};

const selector = createSelector(
  state => state.application,
  (application) => ({ exitUrl: application.exitUrl })
);

export default connect(selector)(ExitLink);
