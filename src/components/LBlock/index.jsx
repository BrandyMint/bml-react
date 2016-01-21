import React, { Component, PropTypes } from 'react';

import bind from 'lodash/bind';

import LBlockLayer from 'components/LBlockLayer';
import LBlockMustRead from 'components/LBlockMustRead';
import LBlockNavbar from 'components/LBlockNavbar';
import LBlockContentSection from 'components/LBlockContentSection';
import LBlockCTA from 'components/LBlockCTA';
import LBlockFooter from 'components/LBlockFooter';

const typeComponents = {
  LBlockContentSection,
  LBlockMustRead,
  LBlockNavbar,
  LBlockCTA,
  LBlockFooter,
};

class LBlock extends Component {
  render() {
    const {
      block, isEditMode,
      onBlockPositionDown, onBlockPositionUp, onViewSwitchNext, onViewSwitchPrev,
    } = this.props;
    const TypeComponent = typeComponents[block.type];

    return (
      <div className="LBlock">
        <LBlockLayer
          block={block}
          isEditMode={isEditMode}
          onBlockPositionDown={onBlockPositionDown}
          onBlockPositionUp={onBlockPositionUp}
          onViewSwitchNext={onViewSwitchNext}
          onViewSwitchPrev={onViewSwitchPrev}
        >
          {TypeComponent
            ? <TypeComponent data={block.data} view={block.view} />
            : <span>Unknown type of block {block.type}</span>
          }
        </LBlockLayer>
      </div>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool,
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlock;