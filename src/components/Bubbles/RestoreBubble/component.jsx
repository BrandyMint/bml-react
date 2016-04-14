import React, { Component, PropTypes } from 'react';
import SuperBubble from 'components/ui-elements/SuperBubble';
import { translate } from 'react-i18next';

import Icon from 'react-icons/lib/md/settings-backup_restore';

class RestoreBubble extends Component {
  render() {
    const {
      t,
      restoreSite,
      originalSite,
    } = this.props;

    const onClick = (event) => {
      event.preventDefault();
      restoreSite(originalSite);
      return false;
    };

    return (<div>
      <a
        href="#"
        onClick={onClick}
        data-tip={t('tips:reset_changes')}
        className="IconLink"
      >
        <SuperBubble>
           <Icon className="SuperBubble--icon" />
         </SuperBubble>
      </a>
    </div>
    );
  }
}

RestoreBubble.propTypes = {
  t: PropTypes.func.isRequired,
  restoreSite: PropTypes.func.isRequired,
  originalSite: PropTypes.shape({
    sections: PropTypes.array.isRequired,
    theme_name: PropTypes.string.isRequired,
    is_boxed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default translate('')(RestoreBubble);
