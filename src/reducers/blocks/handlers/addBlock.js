import cloneDeep from 'lodash/cloneDeep';
import uuid from 'uuid';

import backgroundResolver from 'helpers/backgroundResolver';

export default (blocks, action) => {
  const { example, position } = action.payload;
  const newState = [...blocks];

  const block = {
    uuid: uuid.v4(),
    viewName: example.viewName,
    content: cloneDeep(example.content),
  };

  newState.splice(position, 0, block);

  return backgroundResolver(newState);
};
