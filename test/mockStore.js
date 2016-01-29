import { applyMiddleware } from 'redux';

export default middlewares =>
  (expectations, done) => {
    const mockStoreWithoutMiddleware = () => ({
      dispatch(action) {
        const expectation = expectations.shift();

        try {
          expectation(action);
          if (!expectations.length) {
            done();
          }
          return action;
        } catch (error) {
          done(error);
        }
      },

      getState() { return {}; },
    });

    const mockStoreWithMiddleware = applyMiddleware(
      ...middlewares
    )(mockStoreWithoutMiddleware);

    return mockStoreWithMiddleware();
  };
