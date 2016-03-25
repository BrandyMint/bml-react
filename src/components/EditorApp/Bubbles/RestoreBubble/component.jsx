import React, { Component, PropTypes } from 'react';
import SuperBubble from 'components/ui-elements/SuperBubble';

import Icon from 'react-icons/lib/md/settings-backup_restore';

class RestoreBubble extends Component {
  render() {
    const {
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
        data-tip="Отменить все изменения"
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
  restoreSite: PropTypes.func.isRequired,
  originalSite: PropTypes.shape({
    sections: PropTypes.array.isRequired,
    theme_name: PropTypes.string.isRequired,
    is_boxed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RestoreBubble;
