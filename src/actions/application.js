export const APP_ACTIVITY_TIMEOUT = 1000;

export const APP_ACTIVITY_ON = 'APP_ACTIVITY_ON';
export const APP_ACTIVITY_OFF = 'APP_ACTIVITY_OFF';

export const appActivity = () => (dispatch, getState) => {
  const controlActivityTimeoutId = getState().application.controlActivityTimeoutId;

  if (controlActivityTimeoutId) { window.clearTimeout(controlActivityTimeoutId); }

  const timeoutId =
    window.setTimeout(
                      () => dispatch({ type: APP_ACTIVITY_OFF }),
                      APP_ACTIVITY_TIMEOUT
                     );

  dispatch({
    type: APP_ACTIVITY_ON,
    payload: { timeoutId },
  });
};
