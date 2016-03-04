import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import RichEditable from 'components/primitives/RichEditable';

class HeaderText extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    /* eslint-enable */

    return (
    <div className="BML-section-padding bg-secondary text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <StringEditable
              className="BML-h2 color-primary mb40 mb-xs-24"
              data={content}
              fieldName="header"
              tagName="h2"
            />
            <RichEditable
              className="BML-lead lead mb40"
              data={content}
              fieldName="text"
              tagName="div"
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default applyType(HeaderText, Types.HeaderText);