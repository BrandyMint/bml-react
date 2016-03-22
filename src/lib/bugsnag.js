import semver from 'lib/semver';

const bugsnagInit = () => {
  if (global) {
    return;
  }

  if (window && window.Bugsnag) {
    window.Bugsnag.metaData = {
      app: {
        version: semver.version,
      },
    };
  }
};

bugsnagInit();
