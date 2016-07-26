import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const STYLE = { position: 'fixed', top: 32, left: 32 };

class LeftToolbar extends Component {
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

  handleScroll(event) {
    this.setState({ show: window.scrollY < 60 || this.savedScrollY > window.scrollY });
    this.savedScrollY = window.scrollY;
  }

  render() {
    const { toggleMenu, enable } = this.props;
    const { show } = this.state;

    if (enable) {
      return (
        <ReactCSSTransitionGroup
          component="div"
          transitionName="animation-slide-up"
          transitionEnterTimeout={TRANSITION_TIMEOUT}
          transitionLeaveTimeout={TRANSITION_TIMEOUT}
        >
          { show &&
            <FloatingActionButton style={STYLE} onTouchTap={toggleMenu} backgroundColor='#000000'>
              <MenuIcon />
            </FloatingActionButton>
          }
        </ReactCSSTransitionGroup>
      );
    }

    return <noscript />;
  }
};

LeftToolbar.propTypes = {
  enable: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default LeftToolbar;
