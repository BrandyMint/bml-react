import semver from 'lib/semver';

if (window && window.Bugsnag) {
  window.Bugsnag.metaData = {
    app: {
      version: semver.version,
    },
  };
}
