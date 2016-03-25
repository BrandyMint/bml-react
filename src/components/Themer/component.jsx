import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { ThemesRepo } from 'constants/themes';

const Themer = ({ className, theme_name, children }) =>
  (
    <div className={classnames(className, ThemesRepo.find(theme_name).class)}>
      {children}
    </div>
  );

Themer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme_name: PropTypes.string.isRequired,
};

export default Themer;
