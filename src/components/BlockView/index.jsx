import React, { Component, PropTypes } from 'react';

import UnknownView from 'views/unknown';
import classnames from 'classnames';

import { viewsRepository } from 'repositories/ViewsRepository';

import assign from 'lodash/assign';
import get from 'lodash/get';

class BlockView extends Component {
  render() {
    const { block } = this.props;
    const { nodeAttributes, view } = block;

    const themeClass = 'Theme2';

    const blockId = nodeAttributes ? nodeAttributes.id || block.uuid : block.uuid;
    const blockClasses = classnames({
      BlockView: true,
      [block.view]: true,
      [themeClass]: true,
    });// nodeAttributes ? classnames('BlockView', nodeAttributes.class) : null;

    const backgroundImageUrl = get(block, 'backgroundImage.url');
    const blockStyles = assign(
      { },
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const ViewComponent = viewsRepository.getView(view) || UnknownView;

    return (
      <section className={blockClasses} id={blockId} style={blockStyles}>
        <ViewComponent {...block} />
      </section>
    );
  }
}

BlockView.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
};

export default BlockView;
