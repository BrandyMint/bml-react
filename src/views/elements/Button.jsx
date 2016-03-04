import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import customPropTypes from 'constants/customPropTypes'
import classnames from 'classnames'

const Button = (props) => {
  const { text, href, className } = props;

  const classNames = classnames("btn btn-lg btn-filled", className);

  return (
    <a
      className={classNames}
      href={href || ''}
      >
      {text}
    </a>
  )
}

Button.propTypes = customPropTypes.LinkType;

export default Button;
