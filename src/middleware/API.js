import assign from 'lodash/assign';
import get from 'lodash/get';
import merge from 'lodash/merge';
import keys from 'lodash/keys';
import isEmpty from 'lodash/isEmpty';

import qs from 'qs';
import Rx from 'rx';
import request from 'superagent';

import config from 'constants/config';

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
    assign(headers, { 'Content-Type': 'application/json' });

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

export default store => next => action => {
  if (!get(action, API_CALL)) return next(action);

  const { endpoint, headers, method, payload, types, url, attach } = action[API_CALL];
  const [requestType, successType, failureType] = types;

  const apiKey = get(store.getState(), 'application.api_key');

  const completeHeaders = assign(
    {},
    apiKey ? { 'X-Api-Key': apiKey } : {},
    headers
  );

  next(nextAction(action, { type: requestType }));

  const apiRequest = apiCall(url, endpoint, method, payload, completeHeaders, attach);

  const onError = rawData => {
    const payload = get(rawData, 'data.body') || {};

    const data = {
      payload,
      type: failureType,
      meta: { httpCode: rawData.error.status },
      error: true,
    };

    next(nextAction(action, data));
  };

  const onSuccess = rawData => {
    const payload = get(rawData, 'body') || {};
    const data = { payload, type: successType };

    next(nextAction(action, data));
  };

  apiRequest.subscribe(onSuccess, onError);
};
