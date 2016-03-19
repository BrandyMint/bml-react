import React, { Component } from 'react';

import classnames from 'classnames';
import Themer from 'components/Themer';

import LBlocks from './LBlocks';
import LFooter from './LFooter';

import './index.css';

import {
  DEFAULT_FOOTER_STATE,
} from './LFooter/states';

class LPage extends Component {
  constructor() {
    super();
    this.state = { footer: DEFAULT_FOOTER_STATE };
  }

  render() {
    const footerState = this.state.footer;

    const classes = classnames({
      LPage: true,
      [`is-footer-${footerState}`]: true,
    });

    const onChangeState = (newFooterState) => {
      this.setState({ footer: newFooterState });
    };

    const footerClasses = classnames({
      'LPage-footer': true,
      [`is-${footerState}`]: true,
    });

    // const contentStyles = { width: document.width - 80 };

    return (
      <Themer className={classes}>
        <div className="LPage-content">
          <LBlocks />
        </div>
        { false && (<div className={footerClasses}>
          <LFooter state={footerState} onChangeState={onChangeState}/>
        </div>)}
      </Themer>
    );
  }
}

export default LPage;
