// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import map from 'lodash/map';
import StringEditable from 'components/primitives/StringEditable';

import './index.css';

class MustRead3 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    /* eslint-enable */

const a= (
  <section className="image-slider image-bg slider-all-controls height-70">
    <ul className="slides">
      <li className="image-bg">
        <div className="container v-align-transform">
          <div className="row text-center">
            <div className="col-md-10 col-md-offset-1">
              <h2 className="mb-xs-16">Как выбрать нишу<br className="hidden-sm" />и сделать на ней первые деньги?</h2>
                <p className="lead mb40">
                  Тысячи людей, каждый день начинающие свой бизнес, в 95% случаев проваливаются, наступая на одни и те же грабли!Эти грабли — неправильно выбранная ниша.
                </p>
                <a className="btn btn-lg btn-filled" href="#">Принять участие</a>
                <ul className="list-inline MustRead3-buttons">
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
      </li>
    </ul>
  </section>
  );
    return (
      <section className="MustRead3 text-center">
        <div className="container vertical-center-rel">
          <div className="row">
              <div className="col-md-7">
                <StringEditable
                  className="MustRead3-header"
                  data={content}
                  fieldName="header"
                  tagName="h1"
                />
                <StringEditable
                  className="MustRead3-subheader"
                  data={content}
                  fieldName="subheader"
                  tagName="div"
                />
                <ul className="list-inline MustRead3-buttons">
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

export default applyType(MustRead3, Types.mustRead);
