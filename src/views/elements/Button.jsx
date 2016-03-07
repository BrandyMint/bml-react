import React from 'react';
import customPropTypes from 'constants/customPropTypes';
import classnames from 'classnames';

const Button = ({ text, href, className }) => {
  const classNames = classnames('btn btn-lg btn-filled', className);

  return (
    <a
      className={classNames}
      href={href || ''}
    >
      {text}
    </a>
  );
};

Button.propTypes = customPropTypes.LinkType;

export default Button;
