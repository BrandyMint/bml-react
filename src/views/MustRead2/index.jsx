// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React from 'react';
import { Types, makeView } from 'views/types';
import map from 'lodash/map';
import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const MustRead2 = ({ content }) => {
  return (
    <section className="MustRead2">
      <div className="container vertical-center-rel">
        <div className="row">
            <div className="col-md-7">
              <StringEditable
                className="MustRead2-header"
                data={content}
                fieldName="header"
                tagName="h1"
              />
              <StringEditable
                className="MustRead2-subheader"
                data={content}
                fieldName="subheader"
                tagName="h3"
              />
              <ul className="list-inline MustRead2-buttons">
                {map(content.items, (link, index) =>
                   (<li className="list-inline-item" key={index}>
                     <a href={link.url}
                      className="btn btn-shadow btn-primary text-uppercase btn-md"
                    >{link.title}
                    </a></li>
                  )
                )}
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default makeView(MustRead2, Types.mustRead);
