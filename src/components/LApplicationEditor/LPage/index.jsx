import React, { Component } from 'react';

import classnames from 'classnames';

import LBlocks from 'components/LBlocks';
import LFooter from 'components/LFooter';

import './index.css';

import {
  DEFAULT_FOOTER_STATE,
} from 'components/LFooter/states';

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

    const onChangeState = (footerState) => {
      this.setState({ footer: footerState });
    };

    const footerClasses = classnames({
      'LPage-footer': true,
      [`is-${footerState}`]: true,
    });

    // const contentStyles = { width: document.width - 80 };

    return (
      <div className={classes}>
        <div className="LPage-content">
          <LBlocks />
        </div>
        { false && (<div className={footerClasses}>
          <LFooter state={footerState} onChangeState={onChangeState}/>
        </div>)}
      </div>
    );
  }
}

export default LPage;
