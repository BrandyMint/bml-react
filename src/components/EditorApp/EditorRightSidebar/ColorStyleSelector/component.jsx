import React, { Component, PropTypes } from 'react';
import findIndex from 'lodash/findIndex';
import size from 'lodash/size';
import Icon from 'react-icons/lib/md/all-inclusive';

import Themes from 'constants/themes';
import ReactTooltip from 'react-tooltip';

class ColorStyleSelector extends Component {
  render() {
    const { theme, changeTheme } = this.props;

    const { name } = theme;

    const index = findIndex(Themes, { name });
    const nextIndex = index + 1 !== size(Themes) ? index + 1 : 0;
    const nextTheme = Themes[nextIndex];

    const onClick = (event) => {
      event.preventDefault();
      changeTheme(nextTheme);
      return false;
    };

    return (<div>
      <a
        href="#"
        onClick={onClick}
        title={theme.name}
        data-tip={"Переключатель стиля"}
        className="IconLink"
      >
        <Icon />
      </a>
      <ReactTooltip />
    </div>
    );
  }
}

ColorStyleSelector.propTypes = {
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default ColorStyleSelector;
