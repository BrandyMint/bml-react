import React, { Component } from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'views/elements/ViewContainer';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block, block: { content } } = this.props;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding">
        <div cassName="container">
          {content.html}
        </div>
      </ViewContainer>
    );
  }
}

export default applyType.mustRead(View);
