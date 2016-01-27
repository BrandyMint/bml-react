import React, { Component, PropTypes } from 'react';

import StringEditable from 'components/primitives/StringEditable';

const BContentSectionType1View1 = (data) => {
  const { headerText, image, leadText } = data;

  return (
    <div className="content-section-a">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6">
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
          <div className="col-lg-5 col-lg-offset-2 col-sm-6">
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

BContentSectionType1View1.propTypes = {
  headerText: PropTypes.string.isRequired,
  image: PropTypes.object,
  leadText: PropTypes.string,
};

export default BContentSectionType1View1;