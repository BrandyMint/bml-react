import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Feature = ({ iconClass, title }) => (
  <div className="feature text-center">
    <i className={classnames('icon fade-3-4 inline-block mb16', iconClass)}></i>
    <h4 className="BML-h4">{title}</h4>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default Feature;
