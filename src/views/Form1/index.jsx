import React, { Component } from 'react';
import ViewContainer from 'components/shared/ViewContainer';
import applyType from 'views/types/apply';

import RichEditable from 'components/primitives/RichEditable';

import ContentForm from 'views/elements/ContentForm';

class Form1 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content, form } = block;
    /* eslint-enable */

    return (
      <ViewContainer block={block} className="BML-section--padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5 col-md-offset-1">
              <RichEditable
                className="BML-lead"
                data={content}
                fieldName="text"
                tagName="div"
              />
            </div>
            <div className="col-sm-6 col-md-4 col-md-offset-1">
              <ContentForm {...form} />
            </div>
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.formWithText(Form1);
