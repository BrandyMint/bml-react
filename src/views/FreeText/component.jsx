import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import RichEditable from 'components/primitives/RichEditable';
import ViewContainer from 'components/shared/ViewContainer';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="container">
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
      </ViewContainer>
    );
  }
}

export default applyType(View, Types.content);
