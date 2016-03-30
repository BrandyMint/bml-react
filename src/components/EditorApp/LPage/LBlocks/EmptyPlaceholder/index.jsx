import React, { PropTypes, Component } from 'react';
import LBlockAddButton from '../LBlockAddButton';
import { translate } from 'react-i18next';

import './index.css';

class EmptyPlaceholder extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="LBlocksEmptyPlaceholder">
          <h2 className="LBlocksEmptyPlaceholder-header">
            {t('title')}
          </h2>
          <span>{t('details')}</span>
        </div>
        <LBlockAddButton />
      </div>
    );
  }
}

EmptyPlaceholder.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('empty_placeholder')(EmptyPlaceholder);
