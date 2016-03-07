import React, { Component } from 'react';
import RichEditable from 'components/primitives/RichEditable';
import { Types } from 'types';
import { applyType } from 'views/utils';
import ViewContainer from 'components/shared/ViewContainer';

import ContentForm from 'views/elements/ContentForm';

// import { Link } from 'react-router';

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

export default applyType(Form1, Types.FormWithText);
