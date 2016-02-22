import get from 'lodash/get';

const defaults = {
  apiUrl: 'http://api.3008.vkontraste.ru/v1',
  leadUrl: 'http://3008.vkontraste.ru/leads',
};

export default (key) =>
  get(global.bmlConfig, key, get(defaults, key));
