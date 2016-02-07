import React from 'react';

import map from 'lodash/map';
import { Types, makeView } from 'views/types';

import Icon from 'components/ui-elements/Icon';
import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const MustRead1 = ({ content }) => (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="MustRead1-message">
            <StringEditable
              data={content}
              className="MustRead1-header"
              fieldName="header"
              tagName="h1"
            />
            <StringEditable
              data={content}
              className="subheader"
              fieldName="subheader"
              tagName="h3"
            />
            <hr className="MustRead1-divider" />
            <ul className="list-inline MustRead1-buttons">
              {map(content.items, (item, index) =>
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
);

export default makeView(MustRead1, Types.mustRead);
