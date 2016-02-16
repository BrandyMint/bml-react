import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import LOperatorPanel from 'components/LOperatorPanel';

import LPage from 'components/LPage';
import LBlockAddModal from 'components/LBlockAddModal';
import LBlockEditModal from 'components/LBlockEditModal';

import './index.css';

class LApplication extends Component {
  render() {
    const { onActivity } = this.props;
    const classes = classnames({
      LApplication: true,
      'is-editing': true,
    });
    const contentClasses = classnames({
      'LApplication-content': true,
      'is-editing': true,
    });
    return (
      <div className={classes} onMouseMove={onActivity} onContextMenu={onActivity}>
        <div className="LApplication-sidebar">
          A
          B
          C
        </div>
        { false && (<LOperatorPanel />) }
        <div className={contentClasses}>
          <LPage />
        </div>
        <LBlockAddModal />
        <LBlockEditModal />
      </div>
    );
  }
}

LApplication.propTypes = {
  onActivity: PropTypes.func.isRequired,
};

export default LApplication;
