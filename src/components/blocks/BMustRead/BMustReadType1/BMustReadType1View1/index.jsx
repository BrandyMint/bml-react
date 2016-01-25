import React, { Component, PropTypes } from 'react';

import map from 'lodash/map';

import Icon from 'components/ui-elements/Icon';

const BMustReadType1View1 = ({ backgroundImageUrl, header, items, subheader }) => (
  <div className="intro-header" style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="intro-message">
            <h1>{header}</h1>
            <h3>{subheader}</h3>
            <hr className="intro-divider" />
            <ul className="list-inline intro-social-buttons">
              {map(items, (item, index) =>
                <li key={index} className="list-inline-item">
                  <a
                    href={item.url}
                    className="btn btn-secondary btn-lg"
                  >
                    <Icon glyph={item.icon} />
                    {' '}
                    <span className="network-name">{item.title}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

BMustReadType1View1.propTypes = {
  backgroundImageUrl: PropTypes.string,
  header: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  subheader: PropTypes.string,
};

export default BMustReadType1View1;