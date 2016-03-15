import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Children, Component, PropTypes } from 'react';

import { TRANSITION_TIMEOUT } from 'constants/animation';

const Animated = ({children}) => (
  <ReactCSSTransitionGroup
    component="div"
    transitionName="animation"
    transitionEnterTimeout={TRANSITION_TIMEOUT}
    transitionLeaveTimeout={TRANSITION_TIMEOUT}
    >
    {children}
  </ReactCSSTransitionGroup>
);

export default Animated;
