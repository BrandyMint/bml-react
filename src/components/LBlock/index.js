import React, { PropTypes } from 'react';

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

const LBlock = ({ block }) => {
  const TypeComponent = typeComponents[block.type];

  return (
    <section className="LBlock">
      <LBlockLayer block={block}>
        {TypeComponent
          ? <TypeComponent data={block.data} view={block.view} />
          : <Placeholder type={block.type} />
        }
      </LBlockLayer>
    </section>
  );
};

export default LBlock;