import React from 'react';
import { Link } from 'react-router';

import { EXAMPLE_LANDING_VARIANT_UUID } from 'constants/initialState';

const NoMatch = () => (
  <div>
    <h2>Такая страница не найдена</h2>
    <Link to={`/editor/${EXAMPLE_LANDING_VARIANT_UUID}`}>Пример лендинга</Link>
  </div>
);

export default NoMatch;
