/* global __VERSION__ */

/* eslint-disable no-console */
const semverInit = () => {
  const version = __VERSION__;
  if (typeof window === 'undefined') {
    global.BMLVersion = __VERSION__;
  } else {
    window.BMLVersion = __VERSION__;
  }

  console.log(`Start BML v${version}`);
};
/* eslint-enable */

semverInit();
