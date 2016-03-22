import React, { PropTypes } from 'react';

const DEFAULT_TEXT = 'Установите текст';

const Link = ({ text, href, title, target, className }) =>
  (
    <a
      className={className}
      href={href || ''}
      target={target}
      title={title}
    >
      {text || DEFAULT_TEXT}
    </a>
  );

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
};

export default Link;
