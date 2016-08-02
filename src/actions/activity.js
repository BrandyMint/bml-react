export const ON_ACTIVITY = 'ON_ACTIVITY';
export const ON_PANEL_SETTINGS_OPEN = 'ON_PANEL_SETTINGS_OPEN';

export const startActivity = (payload) => ({
  type: ON_ACTIVITY,
  payload,
});

export const onPanelSettingsOpen = (payload) => ({
  type: ON_PANEL_SETTINGS_OPEN,
  payload,
});
