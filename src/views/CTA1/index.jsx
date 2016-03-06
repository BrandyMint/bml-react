import React from 'react';

import map from 'lodash/map';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import ViewContainer from 'components/shared/ViewContainer';

import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const CTA1 = ({ block}) => (
  <ViewContainer block={block} className="container">
    <div className="row">
      <div className="col-lg-6">
        <StringEditable
          data={block.content}
          fieldName="text"
          tagName="h2"
        />
      </div>
      <div className="col-lg-6">
        <ul className="list-inline CTA1-social-buttons">
          {map(block.content.items, (item, index) =>
            <li key={index} className="list-inline-item">
              <a
                href={item.url}
                className="btn btn-secondary btn-md"
              >
                {item.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </ViewContainer>
);

export default applyType(CTA1, Types.cta);
