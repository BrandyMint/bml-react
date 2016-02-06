import React from 'react';
import CustomTypes from 'constants/customPropTypes';

const Link = (props) => {
  const { className } = props;
  const { text, href } = props.link;
  return (<a className={className} href={href}>{text}</a>);
};

Link.propTypes = {
  link: CustomTypes.link.isRequired,
};

export default Link;
