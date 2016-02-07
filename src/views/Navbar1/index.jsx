import React, { Component } from 'react';
import { Types, makeView } from 'views/types';
import classnames from 'classnames';

import Link from 'views/shared/Link';

import map from 'lodash/map';

import './index.scss';

class Navbar1 extends Component {
  constructor() {
    super();
    this.state = { collapse: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componendWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ collapse: window.scrollY>0 });
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

    return (
      <nav className={classes} role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" link={content.logoLink} />
          </div>
        <div className="navbar-collapse">
          <ul className="nav navbar-nav pull-right">
            {map(content.items, (item, index) =>
              <li className="nav-item" key={index}>
                <Link className="nav-link" link={item} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};

export default makeView(Navbar1, Types.navbar);
