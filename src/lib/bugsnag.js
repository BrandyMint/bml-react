import semver from 'lib/semver';
import assign from 'lodash/assign'

const bugsnagInit = () => {
  if (global) {
    return;
  }

  if (window && window.Bugsnag) {
    window.Bugsnag.metaData = assign(
      window.Bugsnag.metaData || {},
      { frontApp: { version: semver.version, } },
    );
  }
};

bugsnagInit();
