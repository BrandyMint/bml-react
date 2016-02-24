import semverUtils from 'semver-utils';

import { version } from '../../package.json';

export const semver = semverUtils.parse(version);

/* eslint-disable no-console */
export const semverInit = () => {
  window.AppVersion = semver.version;
  console.log(`Start application ${semver}`);
};
/* eslint-enable */

export default semver;
