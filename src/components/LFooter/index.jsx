import React, { Component } from 'react';
import classnames from 'classnames';

import './index.css';
import IconeDehaze from 'react-icons/lib/md/dehaze'
import IconLess from 'react-icons/lib/fa/chevron-up' // 'react-icons/lib/md/expand-less'
import IconMore from 'react-icons/lib/fa/chevron-down'  // 'react-icons/lib/md/expand-more'
import { FOOTER_HIDE, FOOTER_CLOSED, FOOTER_OPEN, DEFAULT_FOOTER_STATE } from 'components/LFooter/states'

class LFooter extends Component {
  render() {
    const { onChangeState } = this.props;
    const footerState = this.props.state;
    const classes = classnames({
      LFooter: true,
      [`is-${footerState}`]: true,
    });

    const onClick = () => {
      let nextState;
      if (footerState == FOOTER_CLOSED) {
        nextState = FOOTER_OPEN;
      }

      if (footerState == FOOTER_OPEN) {
        nextState = FOOTER_CLOSED;
      }
      onChangeState(nextState);
    }

    return (
      <div className={classes}>
        <a className="LFooter-link" onClick={onClick}>
          { (footerState == FOOTER_OPEN) ? (<IconMore />) : (<IconLess />) }
        </a>
        <div>asdsada</div>
      </div>
    );
  }
}

export default LFooter;
