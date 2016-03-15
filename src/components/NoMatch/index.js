import React from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';

import { BLANK_LANDING_VARIANT_UUID } from 'actions/variants';
import { EXAMPLE_LANDING_VARIANT_UUID } from 'constants/config';
import { FULL_VIEWS_EXAMPLES_UUID } from 'constants/fullViewsExamples';

const LANDINGS = [
  {
    uuid: BLANK_LANDING_VARIANT_UUID,
    title: 'Пустой лендинг',
  },
  {
    uuid: EXAMPLE_LANDING_VARIANT_UUID,
    title: `Пример лендинга из API ${EXAMPLE_LANDING_VARIANT_UUID}`,
  },
  {
    uuid: FULL_VIEWS_EXAMPLES_UUID,
    title: 'Примеры всех блоков во всех вариантах',
  },
];

const NoMatch = () => (
  <div className="container">
    <h2>Такая страница не найдена</h2>
    <ul>
      {map(LANDINGS, (l, index) =>
        <li key={index}>
          <Link to={`/editor/${l.uuid}`}>{l.title}</Link>
        </li>
      )}
     </ul>
  </div>
);

export default NoMatch;
