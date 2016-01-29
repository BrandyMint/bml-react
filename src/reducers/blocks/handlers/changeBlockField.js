import map from 'lodash/map';
import set from 'lodash/set';

export default key => (state, action) => {
  const { fieldName, uuid, value } = action.payload;

  return map(state, (block) => {
    return block.uuid === uuid
      ? set(
          { ...block, [key]: { ...block[key] } },
          `${key}.${fieldName}`,
          value
        )
      : block
  });
};