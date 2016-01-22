import React, { PropTypes } from 'react';

import {
  CONTENT_SECTION_TYPE, CTA_TYPE, FOOTER_TYPE, MUST_READ_TYPE, NAVBAR_TYPE,
} from 'constants/blockTypesKeys';

import LBlockLayer from 'components/LBlockLayer';
import LBlockMustRead from 'components/LBlockMustRead';
import LBlockNavbar from 'components/LBlockNavbar';
import LBlockContentSection from 'components/LBlockContentSection';
import LBlockCTA from 'components/LBlockCTA';
import LBlockFooter from 'components/LBlockFooter';

const typeComponents = {
  [CONTENT_SECTION_TYPE]: LBlockContentSection,
  [CTA_TYPE]: LBlockCTA,
  [FOOTER_TYPE]: LBlockFooter,
  [MUST_READ_TYPE]: LBlockMustRead,
  [NAVBAR_TYPE]: LBlockNavbar,
};

const Placeholder = ({ type }) => (
  <div className="LBlock-placeholder">
    Unknown type of block {type}
  </div>
);

const LBlock = ({ block }) => {
  const TypeComponent = typeComponents[block.type];

  return (
    <div className="LBlock">
      <LBlockLayer block={block}>
        {TypeComponent
          ? <TypeComponent data={block.data} view={block.view} />
          : <Placeholder type={block.type} />
        }
      </LBlockLayer>
    </div>
  );
};

export default LBlock;