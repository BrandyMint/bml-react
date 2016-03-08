import React, { Component } from 'react';

import ExitLink from 'components/primitives/ExitLink';

class EditorLeftSidebar extends Component {
  render() {
    return (
      <div className="EditorLeftSidebar">
        <ExitLink />
      </div>
    );
  }
}

export default EditorLeftSidebar;
