import React, { PropTypes } from 'react';

import Editable from 'views/elements/Editable';

const StringEditable = ({ className, tagName, fieldName }) =>
  <Editable element={tagName} className={className} path={fieldName} />;

StringEditable.propTypes = {
  fieldName: PropTypes.string.isRequired,
  className: PropTypes.string,
  tagName: PropTypes.string,
};

export default StringEditable;
