import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Button = (props) => {
  const { text, href } = props;

  return (
    <a
      className="btn btn-lg btn-filled"
      href={href || ''}
      >
      {text}
    </a>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Button;
