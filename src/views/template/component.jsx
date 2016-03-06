import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import ViewContainer from 'components/shared/ViewContainer';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { html } = block.content;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding container">
        {html}
      </ViewContainer>
    );
  }
}

export default applyType(View, Types.PlainHtml);
