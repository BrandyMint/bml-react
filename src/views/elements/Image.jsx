import React, { PropTypes } from 'react';

const Image = (props) => {
  const { height, width, url } = props;

  return (
  <img
    className="img-fluid"
    height={height}
    src={url}
    width={width}
    />
  )
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  title: PropTypes.string,
}

export default Image;
