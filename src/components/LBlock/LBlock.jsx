import React, { Component, PropTypes } from 'react';

import './index.css';

import get from 'lodash/get';
import assign from 'lodash/assign';
import partial from 'lodash/partial';

import LBlockLayer from 'components/LBlockLayer';
import BlockViewBackground from 'components/BlockViewBackground';
import { viewsRepository } from 'views/all';
import UnknownView from 'views/unknown';
// import FaCog from 'react-icons/lib/fa/cog';

class LBlock extends Component {
  getChildContext() {
    const { block, onContentChange } = this.props;

    return {
      onContentChange: partial(onContentChange, block.uuid),
    };
  }
  render() {
    const { block } = this.props;
    const { nodeAttributes, view } = block;

    const blockId = nodeAttributes ? nodeAttributes.id || block.uuid : block.uuid;
    // const blockClasses = nodeAttributes ? classnames('LBlock', nodeAttributes.class) : null;

    const backgroundImageUrl = get(block, 'backgroundImage.url');
    const blockStyles = assign(
      { },
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const ViewComponent = viewsRepository.getView(view) || UnknownView;

    return (
      <div className="LBC">
        <section className="LBC-content" id={blockId} style={blockStyles}>
          <BlockViewBackground block={block} />
          <LBlockLayer block={block}>
            <ViewComponent {...block} />
          </LBlockLayer>
        </section>
        <div className="LBC-panel">
        </div>
      </div>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  onContentChange: PropTypes.func,
};

export default LBlock;
