import React, { Component } from 'react';

import classnames from 'classnames';
import Themer from 'components/Themer';

import LBlocks from './LBlocks';

import './index.css';

class LPage extends Component {
  render() {
    const classes = classnames({
      LPage: true,
      'boxed-layout': true,
    });

    return (
      <Themer className={classes}>
        <LBlocks />
      </Themer>
    );
  }
}

export default LPage;
