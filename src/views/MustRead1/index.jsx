import React from 'react';

import map from 'lodash/map';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

import './index.css';

const MustRead1 = ({ block}) => (
  <ViewContainer block={ block } >
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-lg-12">
          <div className="MustRead1-message">
            <StringEditable
              data={block.content}
              className="MustRead1-header color-primary"
              fieldName="header"
              tagName="h1"
            />
            <StringEditable
              data={block.content}
              className="MustRead1-subheader color-primary"
              fieldName="subheader"
              tagName="div"
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
