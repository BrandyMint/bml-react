import Perf from 'react-addons-perf';
const KEY_S = 83;
const KEY_W = 87;
const KEY_O = 79;

/* eslint-disable no-console */

const keydown = (e) => {
  // S - 83
  // W - 87
  // e.ctrlKey
  const event = e || window.event;
  if (event.ctrlKey) {
		switch (e.keyCode) {
      case KEY_S:
        console.debug('Perf.start');
        Perf.start();
				break;
      case KEY_W:
        console.debug('Perf.printWasted');
        Perf.printWasted();
				break;
      case KEY_O:
        console.debug('Perf.stop');
        Perf.stop();
				break;
		}
  }
}

console.debug('Initialize Perf tools. Use CTRL-S for start, CTRL-W for print wasted and CTRL-O to stop.');
window.Perf = Perf;
document.onkeydown = keydown;
