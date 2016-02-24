/* global __ENV__ */

import { Provider } from 'react-redux';

import { createStore } from './store';
// import ShowApplication from 'components/ShowApplication';

global.ShowWrapper = (props) => {
  const store = createStore(props);

  return (
    <Provider store={store}>
      <ShowApplication />
    </Provider>
  );
};
