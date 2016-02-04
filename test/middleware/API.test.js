
import assign from 'lodash/assign';
import expect from 'expect';
import nock from 'nock';

import APIMiddleware, { API_CALL } from 'middleware/API';
import config from 'constants/config';

import configureStore from '../mockStore';

const mockStore = configureStore([APIMiddleware]);

const REQUEST_TYPE = 'REQUEST_TYPE';
const SUCCESS_TYPE = 'SUCCESS_TYPE';
const FAILURE_TYPE = 'FAILURE_TYPE';

const action = {
  [API_CALL]: {
    endpoint: '/some/endpoint',
    types: [
      REQUEST_TYPE,
      SUCCESS_TYPE,
      FAILURE_TYPE,
    ],
  },
};

describe('Middleware: API', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should ignore actions without API_CALL', done => {
    const actionToIgnore = { type: 'SOME_RANDOM_ACTION' };
    const expectations = [
      dispatched => { expect(dispatched).toEqual(actionToIgnore); },
    ];
    const store = mockStore(expectations, done);

    store.dispatch(actionToIgnore);
  });

  it('should create success action when request has been done', done => {
    const response = { some: 'response' };

    nock(config.api.url)
      .get(action[API_CALL].endpoint)
      .reply(200, response);

    const expectations = [
      dispatched => {
        expect(dispatched.type).toBe(REQUEST_TYPE);
      },

      dispatched => {
        expect(dispatched.type).toBe(SUCCESS_TYPE);
        expect(dispatched.payload).toEqual(response);
      },
    ];

    const store = mockStore(expectations, done);
    store.dispatch(action);
  });

  it('should create failure action when request has been failed', done => {
    const error = { some: 'error' };

    nock(config.api.url)
      .get(action[API_CALL].endpoint)
      .reply(400, error);

    const expectations = [
      dispatched => {
        expect(dispatched.type).toBe(REQUEST_TYPE);
      },

      dispatched => {
        expect(dispatched.type).toBe(FAILURE_TYPE);
        expect(dispatched.payload).toEqual(error);
        expect(dispatched.error).toBe(true);
      },
    ];

    const store = mockStore(expectations, done);
    store.dispatch(action);
  });

  it('should handle query for request', done => {
    const query = { some: 'query' };
    const response = { some: 'response' };
    const actionWithQuery =
     { [API_CALL]: assign({ query }, action[API_CALL]) };

    nock(config.api.url)
      .get(action[API_CALL].endpoint)
      .query(query)
      .reply(200, response);

    const expectations = [
      dispatched => {
        expect(dispatched.type).toBe(REQUEST_TYPE);
      },

      dispatched => {
        expect(dispatched.type).toBe(SUCCESS_TYPE);
        expect(dispatched.payload).toEqual(response);
      },
    ];

    const store = mockStore(expectations, done);
    store.dispatch(actionWithQuery);
  });

  it('should handle HTTP-request method', done => {
    const response = { some: 'response' };
    const postAction =
      { [API_CALL]: assign({ method: 'post' }, action[API_CALL]) };

    nock(config.api.url)
      .post(action[API_CALL].endpoint)
      .reply(200, response);

    const expectations = [
      dispatched => {
        expect(dispatched.type).toBe(REQUEST_TYPE);
      },

      dispatched => {
        expect(dispatched.type).toBe(SUCCESS_TYPE);
        expect(dispatched.payload).toEqual(response);
      },
    ];

    const store = mockStore(expectations, done);
    store.dispatch(postAction);
  });

  it('should handle custom url', done => {
    const response = { some: 'response' };
    const url = 'http://some.url.com';
    const actionWithUrl = { [API_CALL]: assign({ url }, action[API_CALL]) };

    nock(url)
      .get(action[API_CALL].endpoint)
      .reply(200, response);

    const expectations = [
      dispatched => {
        expect(dispatched.type).toBe(REQUEST_TYPE);
      },

      dispatched => {
        expect(dispatched.type).toBe(SUCCESS_TYPE);
        expect(dispatched.payload).toEqual(response);
      },
    ];

    const store = mockStore(expectations, done);
    store.dispatch(actionWithUrl);
  });
});
