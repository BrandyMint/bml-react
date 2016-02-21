import semverUtils from 'semver-utils';

import { version } from '../../package.json';

export default semverUtils.parse(version);
