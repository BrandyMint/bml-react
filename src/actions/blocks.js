export const DOWN_BLOCK_POSITION = 'DOWN_BLOCK_POSITION';
export const UP_BLOCK_POSITION = 'UP_BLOCK_POSITION';
export const SWITCH_NEXT_VIEW = 'SWITCH_NEXT_VIEW';
export const SWITCH_PREV_VIEW = 'SWITCH_PREV_VIEW';

export const downBlockPosition = (uuid) => ({
  type: DOWN_BLOCK_POSITION,
  payload: { uuid },
});

export const upBlockPosition = (uuid) => ({
  type: UP_BLOCK_POSITION,
  payload: { uuid },
});

export const switchNextView = (uuid) => ({
  type: SWITCH_NEXT_VIEW,
  payload: { uuid },
});

export const switchPrevView = (uuid) => ({
  type: SWITCH_PREV_VIEW,
  payload: { uuid },
});

export default { downBlockPosition, upBlockPosition, switchNextView, switchPrevView };