import BContentSectionType1 from 'components/blocks/BContentSection/BContentSectionType1';
import BCTAType1 from 'components/blocks/BCTA/BCTAType1';
import BFooterType1 from 'components/blocks/BFooter/BFooterType1';
import BMustReadType1 from 'components/blocks/BMustRead/BMustReadType1';
import BNavbarType1 from 'components/blocks/BNavbar/BNavbarType1';
import BMapType1 from 'components/blocks/BMap/BMapType1';

import {
  CONTENT_SECTION_TYPE1,
  CTA_TYPE1,
  FOOTER_TYPE1,
  MUST_READ_TYPE1,
  NAVBAR_TYPE1,
  MAP_TYPE1,
} from 'constants/blockTypesKeys';

const typeComponents = {
  [CONTENT_SECTION_TYPE1]: BContentSectionType1,
  [CTA_TYPE1]: BCTAType1,
  [FOOTER_TYPE1]: BFooterType1,
  [MUST_READ_TYPE1]: BMustReadType1,
  [NAVBAR_TYPE1]: BNavbarType1,
  [MAP_TYPE1]: BMapType1,
};

export default typeComponents;
