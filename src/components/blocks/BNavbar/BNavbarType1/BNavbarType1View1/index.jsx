import React from 'react';

import map from 'lodash/map';

const BNavbarType1View1 = (data) => (
  <nav className="navbar navbar-light bg-faded topnav" role="navigation">
    <div className="container topnav">
      <div className="navbar-header">
        <a className="navbar-brand topnav" href="#">
          {data.logoText}
        </a>
      </div>
      <div className="navbar-collapse">
        <ul className="nav navbar-nav pull-right">
          {map(data.items, (item, index) =>
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

export default BNavbarType1View1;