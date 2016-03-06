import React from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import RichEditable from 'components/primitives/RichEditable';
import Image from 'views/elements/Image';
import Buttons from 'views/elements/Buttons';
import ViewContainer from 'components/shared/ViewContainer';

const ContentSection2 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
          <div className="clearfix" />
          <StringEditable
            className="BML-h2 color-primary"
            data={block.content}
            fieldName="header"
            tagName="h2"
          />
          <RichEditable
            className="lead"
            data={block.content}
            fieldName="leadText"
            tagName="div"
          />
          <Buttons buttons={block.content.links} className="mt40"/>
        </div>
        <div className="col-lg-5 col-sm-pull-6 col-sm-6">
          <Image {...block.content.image} />
        </div>
      </div>
    </div>
  </ViewContainer>
);

export default applyType(ContentSection2, Types.contentSection);
