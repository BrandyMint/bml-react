import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import get from 'lodash/get';
import assign from 'lodash/assign';
import partial from 'lodash/partial';

import LBlockLayer from 'components/LBlockLayer';
import TypesRepository from 'helpers/TypesRepository';

const Placeholder = ({ type }) => (
  <div className="LBlock-placeholder">
    Unknown type of block {type}
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
    const { nodeAttributes, type } = block;

    const blockId = nodeAttributes.id;
    const blockClasses = classnames('LBlock', nodeAttributes.class);

    const backgroundImageUrl = get(block, 'backgroundImage.url');
    const blockStyles = assign(
      { },
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const TypeComponent = TypesRepository.get(type);

    return (
      <section className={blockClasses} id={blockId} style={blockStyles}>
        <LBlockLayer block={block}>
          {TypeComponent
            ? <TypeComponent {...block} />
            : <Placeholder type={block.type} />
          }
        </LBlockLayer>
      </section>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  isEditMode: PropTypes.bool,
  onContentChange: PropTypes.func,
};

export default LBlock;
