import set from 'lodash/set';
import backgroundResolver from 'helpers/backgroundResolver';

const updateBlock = (block, branch, path, value) => {
  return set(
    { ...block, [branch]: { ...block[branch] } }, // Сбрасываем ссылку
    `${branch}.${path}`,
    value
  )
}

export default branch => (state, action) => {
  const { uuid, path, value } = action.payload;

  // TODO возвращать предыдущий блок, если тот что надо было изменить не изменился
  //
  const blocks = state.map( (block) => (
    block.uuid === uuid ? updateBlock(block, branch, path, value) : block
    )
  );

  return backgroundResolver(blocks);
};
