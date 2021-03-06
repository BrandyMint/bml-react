// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React, { Component } from 'react';
import applyType from 'views/types/apply';

import EditableButtons from 'views/elements/EditableButtons';
import Editable from 'views/elements/Editable';
import ViewContainer from 'views/elements/ViewContainer';
import { RICH_OPTIONS } from 'views/elements/Editable/options';

/* eslint-disable react/prop-types */
class MustRead3 extends Component {
  render() {
    const { block } = this.props;
    return (
      <ViewContainer block={ block } className="BML-section--height-70 text-center">
        <div className="container vertical-center-rel">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <Editable
                element="h2"
                path="header"
                className="BML-h2 color-primary"
                options={RICH_OPTIONS}
              />
              <Editable
                element="p"
                path="subheader"
                className="lead color-primary mb40"
                options={RICH_OPTIONS}
              />
              <EditableButtons
                path="items"
                className="mt40"
              />
            </div>
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.mustRead(MustRead3);
