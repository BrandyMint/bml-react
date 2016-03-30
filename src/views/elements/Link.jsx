import React, { PropTypes } from 'react';
import Scroll from 'react-scroll';

const DURATION = 500;
const DEFAULT_TEXT = 'Установите текст';

const ALink = ({ text, href, title, target, className }) =>
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

const Link = ({ text, href, title, target, className }) => {
  return (
    <Scroll.Link
      activeClass={className}
      className={className}
      to={href}
      spy={true}
      smooth={true}
      duration={DURATION}
    >
      {text || DEFAULT_TEXT}
     </Scroll.Link>
   );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
};

export default Link;
