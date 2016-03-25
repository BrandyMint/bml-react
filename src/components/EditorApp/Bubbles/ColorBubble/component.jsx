import React, { Component, PropTypes } from 'react';

import SuperBubble from 'components/ui-elements/SuperBubble';
import ColorSubBubble from 'components/ui-elements/ColorSubBubble';

import { ThemesRepo } from 'constants/themes';

class ColorStyleSelector extends Component {
  render() {
    const { theme_name, changeTheme } = this.props;

    const theme = ThemesRepo.find(theme_name);

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
          <ColorSubBubble color={theme.color} />
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
