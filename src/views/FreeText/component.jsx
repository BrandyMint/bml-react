import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import RichEditable from 'components/primitives/RichEditable';

// import { Link } from 'react-router';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    /* eslint-enable */

    return (
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
    );
  }
}

export default applyType(View, Types.content);
