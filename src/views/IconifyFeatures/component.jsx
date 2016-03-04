import React, { Component, PropTypes } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import classnames from 'classnames'
import map from 'lodash/map';

const Feature = (props) => (
  <div className="feature text-center">
    <i className={classnames("icon fade-3-4 inline-block mb16", props.iconClass)}></i>
    <h4 className="BML-h4">{props.title}</h4>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
}

class IconifyFeatures extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    const { header, features } = content;
    /* eslint-enable */

    return (
      <div className="BML-section-padding container">
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
        <div className="row">
          {map(features, (feature, index) => (
            <div className="col-sm-4" key={index}>
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default applyType(IconifyFeatures, Types.HeadedFeatures);
