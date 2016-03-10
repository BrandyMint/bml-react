import React, { PropTypes } from 'react';

const Image = ({ height, width, url }) => (
  <img
    className="BML-img-fluid"
    src={url}
    height={height}
    width={width}
  />
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default Image;
