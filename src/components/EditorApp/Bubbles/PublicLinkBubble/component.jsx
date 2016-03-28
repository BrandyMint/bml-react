import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

// react-icons/lib/md/present-to-all
// react-icons/lib/md/settings-system-daydream
//
import Icon from 'react-icons/lib/md/ondemand-video';

import SuperBubble from 'components/ui-elements/SuperBubble';

class PublicLinkBubble extends Component {
  render() {
    const { t, public_url } = this.props;

    return (<div>
      <a
        href={public_url}
        data-tip={t('tips:open_public_link')}
        target="_blank"
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

PublicLinkBubble.propTypes = {
  t: PropTypes.func.isRequired,
  public_url: PropTypes.string.isRequired,
};

export default translate('')(PublicLinkBubble);
