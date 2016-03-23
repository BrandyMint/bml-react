export const CHANGE_THEME = 'CHANGE_THEME';
export const TOGGLE_BOXED_LAYOUT = 'TOGGLE_BOXED_LAYOUT';

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const toggleBoxedLayout = (flag) => ({
  type: TOGGLE_BOXED_LAYOUT,
  payload: flag,
});
