import React from 'react';
import { Types, makeView } from 'views/types';

import map from 'lodash/map';

const Navbar1 = (props) => {
  const { content } = props;
  return (
    <nav className="navbar navbar-light bg-faded topnav" role="navigation">
    <div className="container topnav">
      <div className="navbar-header">
        <a className="navbar-brand topnav" href="#">
          {content.logoText}
        </a>
      </div>
      <div className="navbar-collapse">
        <ul className="nav navbar-nav pull-right">
          {map(content.items, (item, index) =>
            <li className="nav-item" key={index}>
              <a className="nav-link" href={item.url}>
                {item.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default makeView(Navbar1, Types.navbar);
