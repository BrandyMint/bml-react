// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import map from 'lodash/map';
import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

import './index.css';

const MustRead2 = ({ block }) => (
  <ViewContainer block={ block } >
    <div className="container vertical-center-rel">
      <div className="row">
        <div className="col-md-7">
          <StringEditable
            className="MustRead2-header"
            data={block.content}
            fieldName="header"
            tagName="h1"
          />
          <StringEditable
            className="MustRead2-subheader"
            data={block.content}
            fieldName="subheader"
            tagName="div"
          />
          <ul className="list-inline MustRead2-buttons">
            {map(block.content.items, (link, index) =>
                 (<li className="list-inline-item" key={index}>
                   <a href={link.url}
                   className="btn btn-lg btn-filled"
                   >{link.title}
                   </a></li>
                   )
                )}
                </ul>
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType(MustRead2, Types.mustRead);
