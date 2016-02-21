import React from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const ContentSection2 = ({ content }) => (
  <div className="content-section-b">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
          <div className="clearfix" />
          <StringEditable
            className="section-heading"
            data={content}
            fieldName="headerText"
            tagName="h2"
          />
          <StringEditable
            className="lead"
            data={content}
            fieldName="leadText"
            tagName="p"
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
  </div>
);

export default applyType(ContentSection2, Types.contentSection);
