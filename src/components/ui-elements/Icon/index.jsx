import React, { PropTypes } from 'react';

const Icon = ({ glyph }) => (
  <i className={`Icon fa fa-${glyph}`} />
);

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
};

export default Icon;
