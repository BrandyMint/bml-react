import React, { Component } from 'react';
import map from 'lodash/map';
import applyType from 'views/types/apply';

import ViewContainer from 'components/shared/ViewContainer';
import StringEditable from 'components/primitives/StringEditable';

import Feature from 'views/elements/Feature';

class IconifyFeatures extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    const { features } = content;
    /* eslint-enable */

    return (
      <ViewContainer block={block} className="BML-section--padding">
        <div className="container">
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
                <Feature content={content} path={`features[${index}]`} />
              </div>
            ))}
          </div>
        </div>
      </ViewContainer>
    );
  }
}
export default applyType.headedFeatures(IconifyFeatures);
