import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import replace from 'lodash/replace';

import './LBlockLayerViewInfo.css';

const TIMEOUT = 2000;

class LBlockLayerViewInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillReceiveProps() {
    this.show();
  }

  componentWillUnmount() {
    this.removeTimer();
  }

  setTimer() {
    this.removeTimer();
    this.timer = window.setTimeout(() => { this.hide(); }, TIMEOUT);
  }

  removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  show() {
    this.setTimer();
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {
    const { block } = this.props;
    const { show } = this.state;

    const title = replace(block.viewName, /^B/, '');

    const classes = classnames({
      LBlockLayerViewInfo: true,
      'is-hidden': !show,
      Bubble: true,
    });

    return (
      <div className={classes}>{title}</div>
    );
  }
}

LBlockLayerViewInfo.propTypes = {
  block: PropTypes.object.isRequired,
};

export default LBlockLayerViewInfo;
