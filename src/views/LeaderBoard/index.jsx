import React, { Component } from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'views/elements/ViewContainer';

import Content from './Content';
import Image from 'views/elements/Image';
import Editable from 'views/elements/Editable';

import './index.scss';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block, block: { content } } = this.props;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding">
        <div className="row mb64 mb-xs-24">
          <div className="col-sm-12 text-center spread-children-large">
            <Image {...content.logo} />
          </div>
        </div>
        <div className="row mb40 mb-xs-0">
          <div className="col-sm-12 text-center">
            <Editable
              element="h2"
              path="title"
              className="BML-h2 color-primary"
            />
          </div>
        </div>
        <Content {...content.data} />
      </ViewContainer>
    );
  }
}

export default applyType.leaderBoard(View);
