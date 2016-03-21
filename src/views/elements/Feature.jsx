import React, { PropTypes } from 'react';
import classnames from 'classnames';
import get from 'lodash/get';

import StringEditable from 'components/primitives/StringEditable';

const classes = (content, path) =>
  classnames(
    'icon fade-3-4 inline-block mb16',
    get(content, `${path}.iconClass`)
  );

const Feature = ({ path, content }) => (
  <div className="feature text-center">
    <i className={classes(content, path)}></i>
    <StringEditable
      className="feature-text"
      data={content}
      fieldName={`${path}.title`}
      tagName="div"
    />
  </div>
);

Feature.propTypes = {
  path: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default Feature;
