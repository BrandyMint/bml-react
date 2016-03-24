import React, { Component } from 'react';
import applyType from 'views/types/apply';
import StringEditable from 'views/elements/StringEditable';
import RichEditable from 'views/elements/RichEditable';
import ViewContainer from 'views/elements/ViewContainer';

class HeaderText extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding text-center">
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
                className="lead mb40"
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

export default applyType.headerText(HeaderText);
