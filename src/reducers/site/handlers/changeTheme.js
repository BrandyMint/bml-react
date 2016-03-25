export default (state, { payload }) => {
  const theme_name = payload;
  return { ...state, theme_name };
};
