import React, { Component, PropTypes } from 'react';

import WideIcon from 'react-icons/lib/md/panorama-horizontal';
import NarrowIcon from 'react-icons/lib/md/panorama-vertical';

import SuperBubble from 'components/ui-elements/SuperBubble';


class BoxedBubble extends Component {
  render() {
    const { is_boxed, toggleBoxedLayout } = this.props;

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
        data-tip=""
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
  is_boxed: PropTypes.bool.isRequired,
  toggleBoxedLayout: PropTypes.func.isRequired,
};

export default BoxedBubble;
