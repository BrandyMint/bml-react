import set from 'lodash/set';

export default key => (state, action) => {
  const { block } = state;
  const { name, value } = action.payload;

  return {
    ...state,
    block: set(
      { ...block, [key]: { ...block[key] } },
      `${key}.${name}`,
      value
    ),
  };
};
