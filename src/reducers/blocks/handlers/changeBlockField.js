import map from 'lodash/map';
import set from 'lodash/set';
import backgroundResolver from 'helpers/backgroundResolver';

const updateBlock = (block, key, path, value) => {
  return set(
    { ...block, [key]: { ...block[key] } }, // Сбрасываем ссылку
    `${key}.${path}`,
    value
  )
}

export default key => (state, action) => {
  const { path, uuid, value } = action.payload;

  // TODO возвращать предыдущий блок, если тот что надо было изменить не изменился
  //
  const blocks = map(state, (block) => (
    block.uuid === uuid ? updateBlock(block, key, path, value)
      : block
    )
  );

  return backgroundResolver(blocks);
};
