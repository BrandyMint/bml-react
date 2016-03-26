import React, { PropTypes } from 'react';

import { RICH_OPTIONS } from 'views/elements/Editable/options';

import Editable from 'views/elements/Editable';

const RichEditable = ({ className, tagName, fieldName }) =>
  <Editable
    element={tagName}
    className={className}
    path={fieldName}
    options={RICH_OPTIONS}
  />;

RichEditable.propTypes = {
  fieldName: PropTypes.string.isRequired,
  className: PropTypes.string,
  tagName: PropTypes.string,
};

export default RichEditable;
