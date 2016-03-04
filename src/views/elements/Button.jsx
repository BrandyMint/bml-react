import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import customPropTypes from 'constants/customPropTypes'

const Button = (props) => {
  const { text, href, className } = props;

  return (
    <a
      className={"btn btn-lg btn-filled" + ' ' + className}
      href={href || ''}
      >
      {text}
    </a>
  )
}

Button.propTypes = customPropTypes.LinkType;

export default Button;
