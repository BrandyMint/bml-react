import React, { Component, PropTypes } from 'react';

import map from 'lodash/map';

import StringEditable from 'components/primitives/StringEditable';

const BCTAType1View1 = (data) => {
  const { backgroundImageUrl, items, text } = data;

  const ctaStyles = {
    backgroundImage: `url("${backgroundImageUrl}")`,
  };

  return (
    <div className="banner" style={ctaStyles}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <StringEditable
              data={data}
              fieldName="text"
              tagName="h2"
            />
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
};

BCTAType1View1.propTypes = {
  backgroundImageUrl: PropTypes.string,
  items: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};

export default BCTAType1View1;