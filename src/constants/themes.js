import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import size from 'lodash/size';

const Themes = [
  {
    name: 'green',
    class: 'Theme-green',
    color: 'green',
  },
  {
    name: 'red',
    class: 'Theme-red',
    color: 'red',
  },
  {
    name: 'blue',
    class: 'Theme-blue',
    color: 'blue',
  },
  {
    name: 'gray',
    class: 'Theme-gray',
    color: 'gray',
  },
];

export const DefaultTheme = Themes[0];

export const ThemesRepo = {
  find: (name) => (find(Themes, { name }) || DefaultTheme),

  findNext: (name) => {
    const index = findIndex(Themes, { name });

    const nextIndex = index + 1 !== size(Themes) ? index + 1 : 0;
    return Themes[nextIndex];
  },
};

export default Themes;
