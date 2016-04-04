import semver from 'lib/semver';

/* eslint-disable no-console */
const semverInit = () => {
  if (typeof window === 'undefined') {
    global.AppVersion = semver.version;
  } else {
    window.AppVersion = semver.version;
  }

  console.log(`Start BML application v${semver}`);
};
/* eslint-enable */

semverInit();
