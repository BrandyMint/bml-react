import React, { Component, PropTypes } from 'react';
import BlockViewBackground from 'components/BlockViewBackground';

import classnames from 'classnames';
import get from 'lodash/get';

class ViewContainer extends Component {
  render() {
    const { children, block, className, tagName } = this.props;
    const { nodeAttributes, uuid, view, backgroundVideos, backgroundImage } = block;

    const blockId = get('nodeAttributes.id') || uuid;
    const blockClasses = classnames(
      {
        'BML-section': true,
        [`BML-View-${view}`]: true,
      },
      className,
      get(nodeAttributes,'class'),
    );

    const backgroundImageUrl = get(backgroundImage, 'url');
    const blockStyles = backgroundImageUrl ? { backgroundImage: `url("${backgroundImageUrl}")` } : {};

    return React.createElement(
      tagName || 'section',
      {
        className: blockClasses,
        id: blockId,
        style: blockStyles
      },
      [
        <BlockViewBackground backgroundVideos={backgroundVideos} />,
        children
      ]
    )
  }
}

ViewContainer.propTypes = {
  block: PropTypes.object.isRequired, // TODO block PropType
};

export default ViewContainer;
