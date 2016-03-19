import React, { Component, PropTypes } from 'react';
import findIndex from 'lodash/findIndex';
import size from 'lodash/size';
import Icon from 'react-icons/lib/md/all-inclusive';

import Themes from 'constants/themes';

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
    }

    return <a href="#" onClick={onClick} title={theme.name} className="IconLink"><Icon /></a>;
  }
}

ColorStyleSelector.propTypes = {
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default ColorStyleSelector;
