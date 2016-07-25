import cloneDeep from 'lodash/cloneDeep';
import uuid from 'uuid';

import backgroundResolver from 'helpers/backgroundResolver';

export default (blocks, action) => {
  const { example, position } = action.payload;

  const newState = [...blocks];

  const block = {
    ...cloneDeep(example),
    uuid: uuid.v4(),
  };

  if (position >=0 ) {
    newState.splice(position, 0, block);
  } else {
    newState.push(block);
  }

  return backgroundResolver(newState);
};
