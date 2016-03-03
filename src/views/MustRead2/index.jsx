// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import map from 'lodash/map';
import StringEditable from 'components/primitives/StringEditable';

import './index.css';

class MustRead2 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    /* eslint-enable */

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
                  tagName="div"
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
  }
}

export default applyType(MustRead2, Types.mustRead);
