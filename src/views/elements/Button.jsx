import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Link from './Link';

const Button = (props) => {
  const classNames = classnames('btn btn-lg btn-filled', props.className);

  return (
    <Link {...props} className={classNames} />
  );
};

Button.propTypes = {
  ...Link.propTypes,
  className: PropTypes.string,
};

export default Button;
