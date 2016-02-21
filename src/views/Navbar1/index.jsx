import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Link from 'views/shared/Link';
import map from 'lodash/map';
import './index.css';

const Y = 40;
const MIN = 5;

class Navbar1 extends Component {
  constructor() {
    super();
    this.state = { collapse: false, shownav: true };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.scrollY = 0;
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  componendWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const state = {};
    state.collapse = window.scrollY > Y;

    if (this.scrollY < window.scrollY && state.collapse) {
      state.shownav = false;
    }
    if ((this.scrollY - window.scrollY > MIN) || window.scrollY === 0) {
      state.shownav = true;
    }

    this.scrollY = window.scrollY;

    this.setState(state);
  }

  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;

    /* eslint-enable */
    // <nav className="navbar navbar-light bg-faded topnav" role="navigation">
    const classes = classnames({
      Navbar1: true,
      navbar: true,
      'navbar-fixed-top': true,
      'bg-transparent': true,
      'top-nav-collapse': this.state.collapse,
    });

    const { shownav } = this.state;
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="animation-slide-up"
        transitionEnterTimeout={TRANSITION_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_TIMEOUT}
      >
        { shownav && (
          <nav className={classes} role="navigation">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" link={content.logoLink} />
              </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav pull-xs-right">
                {map(content.items, (item, index) =>
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" link={item} />
                  </li>
                )}
              </ul>
            </div>
          </div>
          </nav>
        )}
    </ReactCSSTransitionGroup>
    );
  }
}

export default applyType(Navbar1, Types.navbar);
