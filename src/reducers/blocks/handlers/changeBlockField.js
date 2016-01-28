import map from 'lodash/map';
import set from 'lodash/set';

export default (state, action) => {
  const { fieldName, uuid, value } = action.payload;

  return map(state, (block) => {
    return block.uuid === uuid
      ? set(
          { ...block, data: { ...block.data } },
          `data.${fieldName}`,
          value
        )
      : block
  });
};