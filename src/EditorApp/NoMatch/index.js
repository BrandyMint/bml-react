/* global __VERSION__ */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import { translate } from 'react-i18next';

import { BLANK_LANDING_VARIANT_UUID } from 'actions/variants';
import { EXAMPLE_LANDING_VARIANT_UUID } from 'constants/config';
import { FULL_VIEWS_EXAMPLES_UUID } from 'constants/fullViewsExamples';

const LANDINGS = [
  {
    uuid: BLANK_LANDING_VARIANT_UUID,
    key: 'empty_page',
  },
  {
    uuid: EXAMPLE_LANDING_VARIANT_UUID,
    key: 'example_page',
  },
  {
    uuid: FULL_VIEWS_EXAMPLES_UUID,
    key: 'all_blocks_page',
  },
];

const NoMatch = ({ t }) => {

  const version = __VERSION__;
  return (
  <div className="container">
    <h2>{t('no_such_page')}</h2>
    <ul>
      {map(LANDINGS, (l, index) =>
        <li key={index}>
          <Link to={`/editor/${l.uuid}`}>{t(l.key)}</Link>
        </li>
      )}
      </ul>
      <p>Version: {version}</p>
  </div>
  )
};

NoMatch.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('no_match')(NoMatch);
