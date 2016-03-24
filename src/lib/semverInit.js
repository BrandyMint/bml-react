import semver from 'lib/semver';

/* eslint-disable no-console */
const semverInit = () => {
  if (window !== undefined) {
    window.AppVersion = semver.version;
  } else {
    global.AppVersion = semver.version;
  }

  console.log(`Start application ${semver}`);
};
/* eslint-enable */

semverInit();
