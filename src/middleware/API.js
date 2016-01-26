import assign from 'lodash/assign';
import get from 'lodash/get';
import merge from 'lodash/merge';

import Rx from 'rx';
import request from 'superagent';

import config from 'constants/config';

const sendMethod = HTTPMethod =>
  (HTTPMethod === 'post' || HTTPMethod === 'put') ? 'send' : 'query';

const sendArguments = (HTTPMethod, query) =>
  (HTTPMethod === 'post' || HTTPMethod === 'put')
    ? JSON.stringify(query)
    : qs.stringify(query, { arrayFormat: 'brackets' });

const apiCall = (
  url = config.api.url,
  endpoint = '',
  method = 'GET',
  query = {},
  headers = {}
) => {
  const subject = new Rx.Subject();
  const HTTPMethod = method.toLowerCase();

  request
    [HTTPMethod](url + endpoint)
    [sendMethod(HTTPMethod)](sendArguments(HTTPMethod, query))
    .set(headers)
    .end((error, data) => {
      if (error) {
        subject.onError({ data, error });
      } else {
        subject.onNext(data);
        subject.onCompleted();
      }
    });

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

  const { endpoint, headers, method, query, types, url } = action[API_CALL];
  const [requestType, successType, failureType] = types;

  const apiKey = get(store.getState(), 'application.api_key');
  const landingVersionUuid = get(store.getState(), 'application.landing_version_uuid');

  const completeHeaders = assign(
    { 'Content-Type': 'application/json' },
    apiKey ? { 'X-Api-Key': apiKey } : {},
    headers
  );

  next(nextAction(action, { type: requestType }));

  const apiRequest = apiCall(url, endpoint, method, query, completeHeaders);

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