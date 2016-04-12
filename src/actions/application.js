export const CHANGE_ZOOM = 'CHANGE_ZOOM';
export const RESTORE_SITE = 'RESTORE_SITE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export const changeZoom = (flag) => ({
  type: CHANGE_ZOOM,
  payload: flag,
});

export const restoreSite = (originalSite) => ({
  type: RESTORE_SITE,
  payload: originalSite,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});
