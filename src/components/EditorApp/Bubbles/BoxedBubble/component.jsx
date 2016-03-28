import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import WideIcon from 'react-icons/lib/md/panorama-horizontal';
import NarrowIcon from 'react-icons/lib/md/panorama-vertical';

import SuperBubble from 'components/ui-elements/SuperBubble';

class BoxedBubble extends Component {
  render() {
    const { t, is_boxed, toggleBoxedLayout } = this.props;

    const onClick = (event) => {
      event.preventDefault();
      toggleBoxedLayout(!is_boxed);
      return false;
    };

    const Icon = is_boxed ? WideIcon : NarrowIcon;

    return (<div>
      <a
        href="#"
        onClick={onClick}
        data-tip={t(is_boxed ? 'tips:is_boxed.on' : 'tips:is_boxed.off')}
        className="IconLink"
      >
        <SuperBubble active={is_boxed}>
          <Icon className="SuperBubble--icon" />
        </SuperBubble>
      </a>
    </div>
    );
  }
}

BoxedBubble.propTypes = {
  t: PropTypes.func.isRequired,
  is_boxed: PropTypes.bool.isRequired,
  toggleBoxedLayout: PropTypes.func.isRequired,
};

export default translate('')(BoxedBubble);
