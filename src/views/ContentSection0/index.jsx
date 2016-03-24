import React, { Component } from 'react';
import ViewContainer from 'views/elements/ViewContainer';
import applyType from 'views/types/apply';

import Image from 'views/elements/Image';
import Buttons from 'views/elements/Buttons';

import StringEditable from 'views/elements/StringEditable';
import RichEditable from 'views/elements/RichEditable';

// import { Link } from 'react-router';

class ContentSection0 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block, block: { content } } = this.props;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding text-center">
        <div className="row mb40 mb-xs-0">
          <div className="col-sm-12 text-center">
            <StringEditable
              className="BML-h2 color-primary"
              data={content}
              fieldName="header"
              tagName="h2"
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
            <RichEditable
              className="lead"
              data={content}
              fieldName="leadText"
              tagName="div"
            />
            <Buttons buttons={content.links} className="mt40" />
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.contentSection(ContentSection0);
