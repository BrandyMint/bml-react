import React, { Children, Component, PropTypes } from 'react';
import BlockViewBackground from 'components/BlockViewBackground';

import classnames from 'classnames';
import get from 'lodash/get';

class ViewContainer extends Component {
  render() {
    const { children, className, nodeAttributes, uuid, view, backgroundVideos, backgroundImage } = this.props;

    const blockId = get('nodeAttributes.id') || uuid;
    const blockClasses = classnames(
      {
        'BML-section': true,
        [`BML-view-${view}`]: true,
      },
      className,
      get(nodeAttributes,'class'),
    );

    const backgroundImageUrl = get(backgroundImage, 'url');
    const blockStyles = backgroundImageUrl ? { backgroundImage: `url("${backgroundImageUrl}")` } : {};

    return (
      <section className={blockClasses} id={blockId} style={blockStyles}>
        <BlockViewBackground backgroundVideos={backgroundVideos} />
        {Children.only(children)}
      </section>
    )
  }
}

ViewContainer.propTypes = {
  // block: PropTypes.object.isRequired,
};

export default ViewContainer;
