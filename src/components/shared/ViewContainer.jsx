import React, { Component, PropTypes } from 'react';
import BackgroundVideo from 'views/shared/BackgroundVideo';

import classnames from 'classnames';
import { get, size } from 'lodash';

const TAG_NAME = 'section';

class ViewContainer extends Component {
  render() {
    const { children, block, className, tagName } = this.props;
    const {
      nodeAttributes,
      uuid,
      view,
      backgroundStyle,
      backgroundVideos,
      backgroundImage,
    } = block;

    const blockId = get('nodeAttributes.id') || uuid;
    const blockClasses = classnames(
      {
        'BML-section': true,
        [`BML-View-${view}`]: true,
      },
      get(backgroundStyle, 'bgClasses'),
      className,
      get(nodeAttributes, 'class'),
    );

    const backgroundImageUrl = get(backgroundImage, 'url');
    const blockStyles = backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` };

    return React.createElement(
      tagName || TAG_NAME,
      {
        className: blockClasses,
        id: blockId,
        style: blockStyles,
      },
      [
        size(backgroundVideos) > 0 && <BackgroundVideo videos={backgroundVideos}/>,
        children,
      ]
    );
  }
}

ViewContainer.propTypes = {
  block: PropTypes.object.isRequired, // TODO block PropType
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  tagName: PropTypes.string,
};

export default ViewContainer;
