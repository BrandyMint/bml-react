import React, { PropTypes } from 'react';
import ViewPropType from './viewPropType';
import ViewComponents from './views';

const BInlineFormType1 = (props) => {
  const ViewComponent = ViewComponents[props.view];

  return (
    <div className="BInlineFormType1">
      {ViewComponent
        ? <ViewComponent {...props} />
        : <span>Unknown view of BInlineFormType1 {props.view}</span>
      }
    </div>
  );
};

BInlineFormType1.contentSchema = {
  version: 1,
  backgroundImage: false,
  form: 'required',
  fields: [
    {
      title: 'Заголовок',
      key: 'title',
      type: 'string',
      isRequired: false,
    },
  ],
};

BInlineFormType1.propTypes = {
  content: PropTypes.shape(ViewPropType).isRequired,
  form: PropTypes.object,
  view: PropTypes.string.isRequired,
};

export default BInlineFormType1;
