import React from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import RichEditable from 'components/primitives/RichEditable';
import Image from 'views/elements/Image';
import Buttons from 'views/elements/Buttons';

const ContentSection3 = ({ content }) => (
  <div className="BML-section-padding container">
    <div className="row">
      <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
        <StringEditable
          className="lead"
          data={content}
          fieldName="leadText"
          tagName="div"
        />
        <StringEditable
          className="BML-h2 color-primary"
          data={content}
          fieldName="header"
          tagName="h2"
        />
        <Buttons buttons={content.links} className="mt40"/>
      </div>
      <div className="col-lg-5 col-sm-pull-6 col-sm-6">
        <Image {...content.image} />
      </div>
    </div>
  </div>
);

export default applyType(ContentSection3, Types.contentSection);
