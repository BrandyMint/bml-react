import React, { Component } from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'components/shared/ViewContainer';

import RichEditable from 'components/primitives/RichEditable';

class PlainText extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    /* eslint-enable */

    return (
      <ViewContainer block={ block }>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RichEditable
                className="Text"
                data={content}
                fieldName="text"
                tagName="div"
              />
            </div>
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.PlainText(PlainText);
