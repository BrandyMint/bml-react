import get from 'lodash/get';
export const EXAMPLE_LANDING_VARIANT_UUID = '10ba27fa-0628-44fd-af24-8430eea47ca7';

const defaults = {
  exitUrl: '/#exit',
  // apiUrl: 'http://api.bmland.dev:3008/v1',
  // postLeadUrl: 'http://bmland.dev:3008/leads',
  apiUrl: 'http://api.3008.vkontraste.ru/v1',
  postLeadUrl: 'http://3008.vkontraste.ru/leads',
  apiKey: '4f37a3c949e009777e761c2b5ced51f2',
  variantUuid: EXAMPLE_LANDING_VARIANT_UUID,
};

export default (key) =>
  get(global.bmlConfig, key, get(defaults, key));
