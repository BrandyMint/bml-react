import React, { Component, PropTypes } from 'react';

// react-icons/lib/md/present-to-all
// react-icons/lib/md/settings-system-daydream
//
import Icon from 'react-icons/lib/md/ondemand-video';

import SuperBubble from 'components/ui-elements/SuperBubble';

class PublicLinkBubble extends Component {
  render() {
    const { public_url } = this.props;

    return (<div>
      <a
        href={public_url}
        data-tip="Открыть сайт в новом окне"
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
  public_url: PropTypes.string.isRequired,
};

export default PublicLinkBubble;
