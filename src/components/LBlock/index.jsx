import React, { Component, PropTypes } from 'react';
import bind from 'lodash/bind';

import LBlockLayer from 'components/LBlockLayer';
import LBlockHeader from 'components/LBlockHeader';
import LBlockNavbar from 'components/LBlockNavbar';
import LBlockContentSection from 'components/LBlockContentSection';

const typeComponents = {
  LBlockContentSection,
  LBlockHeader,
  LBlockNavbar,
};

class LBlock extends Component {
  render() {
    const { block, isEditMode } = this.props;
    const TypeComponent = typeComponents[block.type];

    return (
      <div className="LBlock">
        <LBlockLayer block={block} isEditMode={isEditMode}>
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
};

LBlock.defaultProps = {
  isEditMode: true,
};

export default LBlock;