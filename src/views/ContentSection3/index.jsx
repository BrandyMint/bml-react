import React from 'react';
import { Types, makeView } from 'views/types';
import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const ContentSection3 = ({ content }) => (
  <div className="ContentSection container">
    <div className="row">
      <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
        <div className="clearfix" />
        <StringEditable
          className="lead"
          data={content}
          fieldName="leadText"
          tagName="p"
        />
        <StringEditable
          className="section-heading"
          data={content}
          fieldName="headerText"
          tagName="h2"
        />
      </div>
      <div className="col-lg-5 col-sm-pull-6 col-sm-6">
        <img
          className="img-fluid"
          height={content.image.height}
          src={content.image.url}
          width={content.image.width}
        />
      </div>
    </div>
  </div>
);

export default makeView(ContentSection3, 'ContentSection3', Types.contentSection);
