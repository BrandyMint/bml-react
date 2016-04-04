import get from 'lodash/get';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';

import qs from 'qs';
import request from 'superagent';

import config from 'constants/config';

const CONTENT_TYPE = 'application/json';

const validateRawData = (rawData) => {
  if (rawData.type !== CONTENT_TYPE) {
    /* eslint-disable no-console */
    console.log(`Unsupported response content type "${rawData.type}"`, rawData);
  }
};

const apiCall = ({
  url = null,
  endpoint = '',
  method = 'GET',
  payload = {},
  headers = {},
  attach = {},
  onSuccess,
  onError,
}) => {
  const apiUrl = url || config('apiUrl');
  const HTTPMethod = method.toLowerCase();

  const onEnd = (error, data) => {
    if (error) {
      onError({ data, error });
    } else {
      onSuccess(data);
    }
  };

  const hasAttach = !isEmpty(attach);

  const completeHeaders = hasAttach ?
    headers :
    { ...headers, 'Content-Type': 'application/json' };

  const req = request[HTTPMethod](apiUrl + endpoint);

  if (!isEmpty(payload)) {
    const sendMethod = (HTTPMethod === 'post' || HTTPMethod === 'put') ? 'send' : 'payload';
    const sendArguments =
      (HTTPMethod === 'put' || HTTPMethod === 'post') ?
        JSON.stringify(payload) :
        qs.stringify(payload, { arrayFormat: 'brackets' });

    req[sendMethod](sendArguments);
  }

  Object.keys(attach).forEach(key => req.attach(key, attach[key]));

  req
    .set(completeHeaders)
    .withCredentials()
    .end(onEnd);
};

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => {
  const next = merge({}, action, data);
  delete next[API_CALL];
  return next;
};

// export default store => next => action => {
export default () => next => action => {
  if (!get(action, API_CALL)) return next(action);

  const { endpoint, headers, method, payload, types, url, attach, crossPayload } = action[API_CALL];
  const [requestType, successType, failureType] = types;

  const apiKey = config('apiKey');
  // const apiKey = get(store.getState(), 'application.api_key');

  const completeHeaders = { ...headers, Accept: CONTENT_TYPE };

  if (apiKey) {
    completeHeaders['X-Api-Key'] = apiKey;
  }

  next(nextAction(action, { crossPayload, type: requestType }));

  const onError = rawData => {
    const errorPayload = get(rawData, 'data.body') || {};

    const data = {
      crossPayload,
      payload: errorPayload,
      type: failureType,
      meta: { httpCode: rawData.error.status },
      error: true,
    };

    next(nextAction(action, data));
  };

  const onSuccess = rawData => {
    validateRawData(rawData);
    const successPayload = get(rawData, 'body') || {};
    const data = { crossPayload, payload: successPayload, type: successType };

    next(nextAction(action, data));
  };

  apiCall({ url, endpoint, method, payload, completeHeaders, attach, onSuccess, onError });

  return undefined;
};
