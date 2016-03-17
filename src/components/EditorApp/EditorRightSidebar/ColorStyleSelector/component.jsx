import React, { Component, PropTypes } from 'react';

import Themes from 'constants/themes';

class ColorStyleSelector extends Component {
  render() {
    const { theme } = this.props;
    console.log(theme);

    return false;
  }
}

ColorStyleSelector.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ColorStyleSelector;
