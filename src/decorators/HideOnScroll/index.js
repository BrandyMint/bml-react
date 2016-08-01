import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import css from './index.css';

const HEADER_HEIGHT = 60;

class HideOnScroll extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.savedScrollY = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({ show: scrollY < HEADER_HEIGHT || this.savedScrollY > scrollY });
    this.savedScrollY = scrollY;
  }

  render() {
    const { children } = this.props;
    const { show } = this.state;

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="animation-slide-up"
        transitionEnterTimeout={TRANSITION_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_TIMEOUT}
      >
        { show &&
          <div className={css.toolbar}>
            {children}
          </div>
          }
       </ReactCSSTransitionGroup>
    );
  }
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HideOnScroll;
