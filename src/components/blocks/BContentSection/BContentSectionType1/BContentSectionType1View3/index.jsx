import React, { Component, PropTypes } from 'react';

import StringEditable from 'components/primitives/StringEditable';

const BContentSectionType1View3 = (data) => {
  const { headerText, image, leadText } = data;

  return (
    <div className="content-section-b">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
            <hr className="section-heading-spacer" />
            <div className="clearfix" />
            <StringEditable
              className="lead"
              data={data}
              fieldName="leadText"
              tagName="p"
            />
            <StringEditable
              className="section-heading"
              data={data}
              fieldName="headerText"
              tagName="h2"
            />
          </div>
          <div className="col-lg-5 col-sm-pull-6 col-sm-6">
            <img
              className="img-responsive"
              height={image.height}
              src={image.url}
              width={image.width}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BContentSectionType1View3.propTypes = {
  headerText: PropTypes.string.isRequired,
  image: PropTypes.object,
  leadText: PropTypes.string,
};

export default BContentSectionType1View3;