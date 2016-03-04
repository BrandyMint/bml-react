import React from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import RichEditable from 'components/primitives/RichEditable';
import Image from 'views/elements/Image';
import Buttons from 'views/elements/Buttons';

const ContentSection1 = ({ content }) => (
  <div className="BML-section-padding container">
    <div className="row">
      <div className="col-lg-5 col-sm-6">
        <StringEditable
          className="BML-h2 color-primary"
          data={content}
          fieldName="header"
          tagName="h2"
        />
        <RichEditable
          className="lead"
          data={content}
          fieldName="leadText"
          tagName="div"
        />
        <Buttons buttons={content.links} className="mt40"/>
      </div>
      <div className="col-lg-5 col-lg-offset-2 col-sm-6">
        <Image {...content.image} />
      </div>
    </div>
  </div>
);

export default applyType(ContentSection1, Types.contentSection);
