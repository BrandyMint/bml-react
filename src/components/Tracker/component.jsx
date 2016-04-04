import { Component, PropTypes } from 'react';
import cookie from 'cookie';

import qs from 'qs';

const INITIAL_PARAMS = 'initial_params';
const INITIAL_REFERRER = 'initial_referrer';

const currentReferrer = () => document.referrer;

const safeParse = (value) => (value ? JSON.parse(value) : void(0));

// TODO Может брыть из роутера?
const currentParams = () => qs.parse(location.search);
const initialParams = () => safeParse(cookie.parse(document.cookie)[INITIAL_PARAMS]);
const initialReferrer = () => safeParse(cookie.parse(document.cookie)[INITIAL_REFERRER]);

const currentTracking = () => (
  {
    params: currentParams(),
    referrer: currentReferrer(),
  }
);

const initialTracking = () => (
  {
    params: initialParams(),
    referrer: initialReferrer(),
  }
);

const saveInitialParams = () => {
  document.cookie = cookie.serialize(
    INITIAL_PARAMS,
    JSON.stringify(currentParams()),
  );
};

const saveInitialReferrer = () => {
  document.cookie = cookie.serialize(
    INITIAL_REFERRER,
    JSON.stringify(currentReferrer()),
  );
};

// TODO Сохранить initial_params/initial_referrer в cookie
const trackInfo = () => (
  {
    initial: initialTracking(),
    current: currentTracking(),
  }
);

class Tracker extends Component {
  componentDidMount() {
    this.trackInitial();
    this.track();
  }

  trackInitial() {
    if (!initialParams()) {
      saveInitialParams(currentParams());
    }
    if (!initialReferrer()) {
      saveInitialReferrer(currentReferrer());
    }
  }

  track() {
    this.props.saveTracking(trackInfo());
  }

  render() {
    return this.props.children;
  }
}

Tracker.propTypes = {
  saveTracking: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tracker;
