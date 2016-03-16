import map from 'lodash/map';
import set from 'lodash/set';
import backgroundResolver from 'helpers/backgroundResolver';

export default key => (state, action) => {
  const { fieldName, uuid, value } = action.payload;

  const blocks = map(state, (block) =>
    block.uuid === uuid
      ? set(
          { ...block, [key]: { ...block[key] } },
          `${key}.${fieldName}`,
          value
        )
      : block
  );

  return backgroundResolver(blocks);
};
