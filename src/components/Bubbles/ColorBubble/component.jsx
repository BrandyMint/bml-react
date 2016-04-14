import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import SuperBubble from 'components/ui-elements/SuperBubble';
import ColorSubBubble from 'components/ui-elements/ColorSubBubble';

import { ThemesRepo } from 'constants/themes';

class ColorStyleSelector extends Component {
  render() {
    const { t, enable, theme_name, changeTheme } = this.props;

    if (!enable) { return false; }

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
        data-tip={t('tips:color_schema_change')}
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
  t: PropTypes.func.isRequired,
  theme_name: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  enable: PropTypes.bool.isRequired,
};

export default translate('')(ColorStyleSelector);
