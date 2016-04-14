import React from 'react';

import map from 'lodash/map';

import { FULL_VIEWS_EXAMPLES_SECTIONS } from 'constants/fullViewsExamples';
import LBlockAddFormItem from './LBlockAddFormItem';

import './index.css';

const LBlockAddForm = () => (
  <div className="LBlockAddForm">
    {map(FULL_VIEWS_EXAMPLES_SECTIONS, (example, index) =>
     <LBlockAddFormItem
       example={example}
       key={index}
     />
    )}
  </div>
);

export default LBlockAddForm;
