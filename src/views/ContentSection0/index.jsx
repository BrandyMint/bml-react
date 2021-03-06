import React, { Component } from 'react';
import ViewContainer from 'views/elements/ViewContainer';
import applyType from 'views/types/apply';

import Image from 'views/elements/Image';

import EditableButtons from 'views/elements/EditableButtons';
import Editable from 'views/elements/Editable';
import { RICH_OPTIONS } from 'views/elements/Editable/options';

class ContentSection0 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block, block: { content } } = this.props;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding text-center">
        <div className="container">
          <div className="row mb40 mb-xs-0">
            <div className="col-sm-12 text-center">
              <Editable
                element="h2"
                path="header"
                className="BML-h2 color-primary"
              />
            </div>
          </div>
          <div className="row mb64 mb-xs-24">
            <div className="col-sm-12 text-center spread-children-large">
              <Image {...content.image} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
              <Editable
                path="leadText"
                className="lead"
                options={RICH_OPTIONS}
              />
              <EditableButtons path="links" className="mt40" />
            </div>
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.contentSection(ContentSection0);
