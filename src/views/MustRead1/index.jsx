import React from 'react';

import map from 'lodash/map';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

import './index.css';

const MustRead1 = ({ block}) => (
  <ViewContainer block={ block } className="BML-section--height-70">
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-lg-12">
          <div className="MustRead1-message">
            <StringEditable
              className="BML-h2 color-primary"
              data={block.content}
              fieldName="header"
              tagName="h2"
            />
            <StringEditable
              className="BML-lead lead color-primary mb40"
              data={block.content}
              fieldName="subheader"
              tagName="p"
            />
            <ul className="list-inline MustRead1-buttons">
              {map(block.content.items, (item, index) =>
                <li key={index} className="list-inline-item">
                  <a
                    href={item.url}
                    className="BML-btn btn btn-lg btn-filled"
                  >
                  {item.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType(MustRead1, Types.mustRead);
