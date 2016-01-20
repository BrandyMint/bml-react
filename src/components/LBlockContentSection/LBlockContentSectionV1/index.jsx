import React, { Component, PropTypes } from 'react';

const LBlockContentSectionV1 = ({ headerText, image, leadText }) => (
  <div className="content-section-a">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-sm-6">
          <hr className="section-heading-spacer" />
          <div className="clearfix" />
          <h2
            className="section-heading"
            dangerouslySetInnerHTML={{ __html: headerText }}
          />
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: leadText }}
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

LBlockContentSectionV1.propTypes = {
  headerText: PropTypes.string.isRequired,
  leadText: PropTypes.string,
  image: PropTypes.object,
};

export default LBlockContentSectionV1;