import get from 'lodash/get';
import merge from 'lodash/merge';
import keys from 'lodash/keys';
import isEmpty from 'lodash/isEmpty';

import qs from 'qs';
import Rx from 'rx';
import request from 'superagent';

import config from 'constants/config';

import invariant from 'invariant';

const CONTENT_TYPE = 'application/json';

const validateRawData = ({ type }) => {
  invariant(type === CONTENT_TYPE, `Unsupported response content type ${type}`);
};

const apiCall = (
  url = null,
  endpoint = '',
  method = 'GET',
  payload = {},
  headers = {},
  attach = {},
) => {
  const apiUrl = url || config('apiUrl');
  const subject = new Rx.Subject();
  const HTTPMethod = method.toLowerCase();

  const onEnd = (error, data) => {
    if (error) {
      subject.onError({ data, error });
    } else {
      subject.onNext(data);
      subject.onCompleted();
    }
  };

  const hasAttach = !isEmpty(attach);

  const completeHeaders = hasAttach ?
    headers :
    { ...headers, 'Content-Type': 'application/json' };

  const req = request
    [HTTPMethod](apiUrl + endpoint);

  if (!isEmpty(payload)) {
    const sendMethod = (HTTPMethod === 'post' || HTTPMethod === 'put') ? 'send' : 'payload';
    const sendArguments =
      (HTTPMethod === 'put' || HTTPMethod === 'post') ?
        JSON.stringify(payload) :
        qs.stringify(payload, { arrayFormat: 'brackets' });

    req
      [sendMethod](sendArguments);
  }

  keys(attach).forEach(key => req.attach(key, attach[key]));

  req
    .set(completeHeaders)
    .end(onEnd);

  return subject;
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

  const { endpoint, headers, method, payload, types, url, attach } = action[API_CALL];
  const [requestType, successType, failureType] = types;

  const apiKey = config('apiKey');
  // const apiKey = get(store.getState(), 'application.api_key');

  const completeHeaders = { ...headers, Accept: CONTENT_TYPE };

  if (apiKey) {
    completeHeaders['X-Api-Key'] = apiKey;
  }

  next(nextAction(action, { type: requestType }));

  const apiRequest = apiCall(url, endpoint, method, payload, completeHeaders, attach);

  const onError = rawData => {
    validateRawData(rawData);
    const errorPayload = get(rawData, 'data.body') || {};

    const data = {
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
    const data = { payload: successPayload, type: successType };

    next(nextAction(action, data));
  };

  return apiRequest.subscribe(onSuccess, onError);
};
