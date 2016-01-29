import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import get from 'lodash/get';
import assign from 'lodash/assign';
import partial from 'lodash/partial';

import {
  CONTENT_SECTION_TYPE1,
  CTA_TYPE1,
  FOOTER_TYPE1,
  MUST_READ_TYPE1,
  NAVBAR_TYPE1,
} from 'constants/blockTypesKeys';

import BContentSectionType1 from 'components/blocks/BContentSection/BContentSectionType1';
import BCTAType1 from 'components/blocks/BCTA/BCTAType1';
import BFooterType1 from 'components/blocks/BFooter/BFooterType1';
import BMustReadType1 from 'components/blocks/BMustRead/BMustReadType1';
import BNavbarType1 from 'components/blocks/BNavbar/BNavbarType1';
import LBlockLayer from 'components/LBlockLayer';

const typeComponents = {
  [CONTENT_SECTION_TYPE1]: BContentSectionType1,
  [CTA_TYPE1]: BCTAType1,
  [FOOTER_TYPE1]: BFooterType1,
  [MUST_READ_TYPE1]: BMustReadType1,
  [NAVBAR_TYPE1]: BNavbarType1,
};

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
      {},
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const TypeComponent = typeComponents[type];

    return (
      <section className={blockClasses} id={blockId} style={blockStyles}>
        <LBlockLayer block={block}>
          {TypeComponent
            ? <TypeComponent data={block.content} view={block.view} />
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
