import semverUtils from 'semver-utils';
import { version } from '../../package.json';

const semver = semverUtils.parse(version);
export default semver;
