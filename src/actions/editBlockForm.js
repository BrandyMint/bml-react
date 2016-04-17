export const CONTENT_TAB = 'content';
export const FORM_TAB = 'form';
export const BACKGROUND_TAB = 'background';
export const NODEATTRIBUTES_TAB = 'attributes';

export const SWITCH_TAB = 'SWITCH_TAB';

export const switchTab = (tab) => ({
  type: SWITCH_TAB,
  payload: { tab },
});
