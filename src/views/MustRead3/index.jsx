// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React, { Component } from 'react';
import applyType from 'views/types/apply';

import Buttons from 'views/elements/Buttons';
import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

class MustRead3 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--height-70 text-center">
        <div className="container vertical-center-rel">
          <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <StringEditable
                  className="BML-h2 color-primary"
                  data={content}
                  fieldName="header"
                  tagName="h2"
                />
                <StringEditable
                  className="lead color-primary mb40"
                  data={content}
                  fieldName="subheader"
                  tagName="p"
                />
                <Buttons buttons={content.items} className="mt40" />
              </div>
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.mustRead(MustRead3);
