export default {
  // Специальные фейковые замены, чтобы во вьюхер не подтягивалась JS и CSS от редактора
  alias: {
    'views/elements/Editable/Editor': 'viewer/stubs/Editor.js',
    'react-medium-editor': 'viewer/stubs/Editor.js',
    'superagent': 'viewer/stubs/superagent.js',
  }
};
