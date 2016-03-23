import React, { Component, PropTypes } from 'react';

import WideIcon from 'react-icons/lib/md/panorama-horizontal';
import NarrowIcon from 'react-icons/lib/md/panorama-vertical';

import SuperBubble from 'components/ui-elements/SuperBubble';


class BoxedBubble extends Component {
  render() {
    const { isBoxed, toggleBoxedLayout } = this.props;

    const onClick = (event) => {
      event.preventDefault();
      toggleBoxedLayout(!isBoxed);
      return false;
    };

    const Icon = isBoxed ? WideIcon : NarrowIcon;

    return (<div>
      <a
        href="#"
        onClick={onClick}
        data-tip=""
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

BoxedBubble.propTypes = {
  isBoxed: PropTypes.bool.isRequired,
  toggleBoxedLayout: PropTypes.func.isRequired,
};

export default BoxedBubble;
