import React, { PropTypes } from 'react';

import map from 'lodash/map';

const LBlockNavbarV1 = ({ items, logoText }) => (
  <nav className="navbar navbar-default topnav" role="navigation">
    <div className="container topnav">
      <div className="navbar-header">
        <a className="navbar-brand topnav" href="#">
          {logoText}
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          {map(items, (item, index) =>
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

LBlockNavbarV1.propTypes = {
  items: PropTypes.array.isRequired,
  logoText: PropTypes.string.isRequired,
};

export default LBlockNavbarV1;