import React from 'react';

import map from 'lodash/map';
import { Types, makeView } from 'views/types';

import StringEditable from 'components/primitives/StringEditable';

const CTA1 = ({ content }) => (
  <div className="banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <StringEditable
            data={content}
            fieldName="text"
            tagName="h2"
          />
        </div>
        <div className="col-lg-6">
          <ul className="list-inline banner-social-buttons">
            {map(content.items, (item, index) =>
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

export default makeView(CTA1, Types.cta);
