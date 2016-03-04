import React, { Component } from 'react';
import RichEditable from 'components/primitives/RichEditable';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

import ContentForm from 'views/elements/ContentForm';

// import { Link } from 'react-router';

class Form1 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content, form } = this.props;
    /* eslint-enable */

    return (
      <div className="BML-section-padding container">
        <div className="row">
          <div className="col-sm-6 col-md-5">
            <RichEditable
              className="BML-lead"
              data={content}
              fieldName="text"
              tagName="div"
            />
          </div>
          <div className="col-sm-6 col-md-5 col-md-offset-1">
            <ContentForm {...form} />
          </div>
        </div>
      </div>
    );
  }
}

export default applyType(Form1, Types.FormWithText);
