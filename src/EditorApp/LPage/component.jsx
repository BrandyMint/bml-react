import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';
import Themer from 'components/Themer';

import LBlocks from './LBlocks';

import './index.scss';

class LPage extends Component {
  getChildContext() {
    return { isEditor: true };
  }

  render() {
    const { is_boxed, zoom } = this.props;

    const classes = classnames({
      LPage: true,
      'boxed-layout': is_boxed,
      'LPage--scale': zoom,
    });

    return (
      <Themer className={classes}>
        <LBlocks />
      </Themer>
    );
  }
}

LPage.childContextTypes = {
  isEditor: PropTypes.bool,
};

LPage.propTypes = {
  is_boxed: PropTypes.bool.isRequired,
  zoom: PropTypes.bool.isRequired,
};

export default LPage;
