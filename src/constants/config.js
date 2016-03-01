import get from 'lodash/get';
import { EXAMPLE_LANDING_VARIANT_UUID } from 'constants/initialState';

const defaults = {
  exitUrl: '/#exit',
  apiUrl: 'http://api.3008.vkontraste.ru/v1',
  postLeadUrl: 'http://3008.vkontraste.ru/leads',
  apiKey: '5d8aa2f240c5d05e992e0e84f58ce965',
  variantUuid: EXAMPLE_LANDING_VARIANT_UUID,
};

export default (key) =>
  get(global.bmlConfig, key, get(defaults, key));
