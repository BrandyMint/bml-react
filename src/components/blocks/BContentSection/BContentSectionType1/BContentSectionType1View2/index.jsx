import React from 'react';

import StringEditable from 'components/primitives/StringEditable';

const BContentSectionType1View2 = (data) => (
  <div className="content-section-b">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
          <hr className="section-heading-spacer" />
          <div className="clearfix" />
          <StringEditable
            className="section-heading"
            data={data}
            fieldName="headerText"
            tagName="h2"
          />
          <StringEditable
            className="lead"
            data={data}
            fieldName="leadText"
            tagName="p"
          />
        </div>
        <div className="col-lg-5 col-sm-pull-6 col-sm-6">
          <img
            className="img-responsive"
            height={data.image.height}
            src={data.image.url}
            width={data.image.width}
          />
        </div>
      </div>
    </div>
  </div>
);

export default BContentSectionType1View2;