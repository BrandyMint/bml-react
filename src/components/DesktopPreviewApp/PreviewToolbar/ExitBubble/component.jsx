import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { translate } from 'react-i18next';

import SuperBubble from 'components/ui-elements/SuperBubble';

import Icon from 'react-icons/lib/go/screen-normal';
// import Icon from 'react-icons/lib/md/build';

class ExitBubble extends Component {
  render() {
    const { t, variantUuid } = this.props;

    return (
      <Link
        to={`/editor/${variantUuid}`}
        data-tip={t('exit_from_preview')}
        className="IconLink"
      >
        <SuperBubble className="SuperBubble--unobtrusive">
          <Icon className="SuperBubble--icon" />
        </SuperBubble>
      </Link>
    );
  }
}

ExitBubble.propTypes = {
  t: PropTypes.func.isRequired,
  variantUuid: PropTypes.string.isRequired,
};

export default translate('')(ExitBubble);
