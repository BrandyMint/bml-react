import React, { PropTypes } from 'react';

const DEFAULT_CLASS_NAME = 'BML-img-fluid';

const Image = ({ height, className, width, url }) => (
  <img
    className={className || DEFAULT_CLASS_NAME}
    src={url}
    height={height}
    width={width}
  />
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default Image;
