import React, { Component, PropTypes } from 'react';
import BackgroundVideo from './BackgroundVideo';

import classnames from 'classnames';
import get from 'lodash/get';
import size from 'lodash/size';

const TAG_NAME = 'section';

class ViewContainer extends Component {
  getChildContext() {
    const { block } = this.props;
    console.log("ViewContainer getChildContext", block.uuid, block.content);
    return { block };
  }

  render() {
    const { children, block, className, tagName } = this.props;
    const {
      nodeAttributes,
      uuid,
      viewName,
      backgroundStyle,
      backgroundVideos,
      backgroundImage,
    } = block;

    const blockId = get(block, 'nodeAttributes.id') || uuid;
    const blockClasses = classnames(
      {
        'BML-section': true,
        [`BML-View-${viewName}`]: true,
      },
      get(backgroundStyle, 'bgClasses'),
      className,
      get(nodeAttributes, 'class'),
    );

    const backgroundImageUrl = get(backgroundImage, 'url');
    const blockStyles = backgroundImageUrl && {
      backgroundImage: `url("${backgroundImageUrl}")`,
      // Чтобы небольшие картинки типа http://info.wodcast.com/wp-content/uploads/2015/06/Stadium2_1024.png
      // были на всю ширину
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    console.log('Render ViewContainer');
    return React.createElement(
      tagName || TAG_NAME,
      {
        className: blockClasses,
        id: blockId,
        style: blockStyles,
      },
      [
        size(backgroundVideos) > 0 && <BackgroundVideo videos={backgroundVideos} key={1} />,
        children,
      ]
    );
  }
}

ViewContainer.propTypes = {
  block: PropTypes.object.isRequired, // TODO block PropType
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tagName: PropTypes.string,
};

ViewContainer.childContextTypes = {
  block: PropTypes.object.isRequired,
};

export default ViewContainer;
