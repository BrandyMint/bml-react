import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import LOperatorPanel from 'components/LOperatorPanel';

import LPage from 'components/LPage';
import LBlockAddModal from 'components/LBlockAddModal';
import LBlockEditModal from 'components/LBlockEditModal';

import './LApplication.css';

class LApplication extends Component {
  render() {
    const { onActivity, isEditMode } = this.props;
    const classes = classnames({
      LApplication: true,
      'is-editing': isEditMode,
    });
    const contentClasses = classnames({
      'LApplication-content': true,
      'is-editing': isEditMode,
    });
    return (
      <div className={classes} onMouseMove={onActivity} onContextMenu={onActivity}>
        { isEditMode && (
          <div className="LApplication-sidebar">
            { false && (<LOperatorPanel />)}
            A
            B
            C
          </div>
          )}
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
  isEditMode: PropTypes.bool.isRequired,
};

export default LApplication;
