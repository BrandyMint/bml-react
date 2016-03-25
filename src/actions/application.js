export const CHANGE_ZOOM = 'CHANGE_ZOOM';
export const RESTORE_SITE = 'RESTORE_SITE';

export const changeZoom = (flag) => ({
  type: CHANGE_ZOOM,
  payload: flag,
});

export const restoreSite = () => ({
  type: RESTORE_SITE,
});
