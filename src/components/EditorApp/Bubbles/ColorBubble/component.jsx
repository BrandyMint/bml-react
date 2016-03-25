import React, { Component, PropTypes } from 'react';
import Icon from 'react-icons/lib/md/all-inclusive';

import SuperBubble from 'components/ui-elements/SuperBubble';

import { ThemesRepo } from 'constants/themes';

class ColorStyleSelector extends Component {
  render() {
    const { theme_name, changeTheme } = this.props;

    const nextTheme = ThemesRepo.findNext(theme_name);

    const onClick = (event) => {
      event.preventDefault();
      changeTheme(nextTheme.name);
      return false;
    };

    return (<div>
      <a
        href="#"
        onClick={onClick}
        title={theme_name}
        data-tip="Сменить цветовую схему"
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

ColorStyleSelector.propTypes = {
  theme_name: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default ColorStyleSelector;
