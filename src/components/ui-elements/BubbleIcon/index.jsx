import React, { Component, PropTypes } from 'react';

import Bubble from 'components/ui-elements/Bubble';

class BubbleIcon extends Component {
  render() {
    const { children } = this.props;
    const props = this.props;

    return (
     <Bubble hasIcon {...props}>
       <span className="Bubble-icon">
         {children}
       </span>
    </Bubble>
    );
  }
}

BubbleIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  isProcessing: PropTypes.bool,
};

export default BubbleIcon;
