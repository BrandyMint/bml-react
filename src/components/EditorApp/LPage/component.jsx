import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';
import Themer from 'components/Themer';

import LBlocks from './LBlocks';

import './index.css';

class LPage extends Component {
  render() {
    const { isBoxed } = this.props;

    const classes = classnames({
      LPage: true,
      'boxed-layout': isBoxed,
    });

    return (
      <Themer className={classes}>
        <LBlocks />
      </Themer>
    );
  }
}

LPage.propTypes = {
  isBoxed: PropTypes.bool.isRequired,
};

export default LPage;
