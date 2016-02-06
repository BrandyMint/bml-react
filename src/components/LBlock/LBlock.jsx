import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import get from 'lodash/get';
import assign from 'lodash/assign';
import partial from 'lodash/partial';

import LBlockLayer from 'components/LBlockLayer';
import { viewsRepository } from 'views/all';

const Placeholder = ({ block }) => (
  <div className="LBlock-placeholder">
    Unknown view of block {block.view}
  </div>
);

class LBlock extends Component {
  getChildContext() {
    const { block, isEditMode, onContentChange } = this.props;

    return {
      isEditMode,
      onContentChange: partial(onContentChange, block.uuid),
    };
  }
  render() {
    const { block } = this.props;
    const { nodeAttributes, view } = block;

    const blockId = nodeAttributes ? nodeAttributes.id || block.uuid : block.uuid;
    const blockClasses = nodeAttributes ? classnames('LBlock', nodeAttributes.class) : {};

    const backgroundImageUrl = get(block, 'backgroundImage.url');
    const blockStyles = assign(
      { },
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const ViewComponent = viewsRepository.getView(view);

    return (
      <section className={blockClasses} id={blockId} style={blockStyles}>
        <LBlockLayer block={block}>
          {ViewComponent
            ? <ViewComponent {...block} />
            : <Placeholder block={block} />
          }
        </LBlockLayer>
      </section>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func,
};

export default LBlock;
