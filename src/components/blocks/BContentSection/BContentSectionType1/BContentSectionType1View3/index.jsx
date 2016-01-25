import React, { Component, PropTypes } from 'react';

const BContentSectionType1View3 = ({ headerText, image, leadText }) => (
  <div className="content-section-b">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
          <hr className="section-heading-spacer" />
          <div className="clearfix" />
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: leadText }}
          />
          <h2
            className="section-heading"
            dangerouslySetInnerHTML={{ __html: headerText }}
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

BContentSectionType1View3.propTypes = {
  headerText: PropTypes.string.isRequired,
  leadText: PropTypes.string,
  image: PropTypes.object,
};

export default BContentSectionType1View3;