export default (state, { payload }) => {
  const theme = payload;
  return { ...state, theme };
};
