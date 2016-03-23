import get from 'lodash/get';

export const EXAMPLE_LANDING_VARIANT_UUID = '7a5eecef-9cbd-4a52-bfcc-111a848edfa2';

const defaults = {
  exitUrl: '/#exit',
  // apiUrl: 'http://api.bmland.dev:3008/v1',
  // postLeadUrl: 'http://bmland.dev:3008/leads',
  apiUrl: 'http://api.3008.vkontraste.ru/v1',
  postLeadUrl: 'http://3008.vkontraste.ru/leads',
  apiKey: 'test',
  variantUuid: EXAMPLE_LANDING_VARIANT_UUID,
};

export default (key) =>
  get(global.bmlConfig, key, get(defaults, key));
