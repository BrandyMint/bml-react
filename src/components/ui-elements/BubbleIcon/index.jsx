import React, { PropTypes } from 'react';

import Bubble from 'components/ui-elements/Bubble';

const BubbleIcon = (props) => {
  const { children } = props;
  return (
   <Bubble hasIcon {...props}>
     <span className="Bubble-icon">
       {children}
     </span>
  </Bubble>
  );
};

BubbleIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  isProcessing: PropTypes.bool,
};

export default BubbleIcon;
