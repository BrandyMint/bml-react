import React, { Component, PropTypes } from 'react';

import map from 'lodash/map';

const LBlockCTAV1 = ({ backgroundImageUrl, items, text }) => (
  <div className="banner" style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>{text}</h2>
        </div>
        <div className="col-lg-6">
          <ul className="list-inline banner-social-buttons">
            {map(items, (item, index) =>
              <li key={index} className="list-inline-item">
                <a
                  href={item.url}
                  className="btn btn-secondary btn-lg"
                >
                  <span className="network-name">{item.title}</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

LBlockCTAV1.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default LBlockCTAV1;