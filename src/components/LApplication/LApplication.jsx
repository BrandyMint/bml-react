import React, { Component, PropTypes } from 'react';

import LOperatorPanel from 'components/LOperatorPanel';

import LPage from 'components/LPage';
import LBlockAddModal from 'components/LBlockAddModal';
import LBlockEditModal from 'components/LBlockEditModal';

import './LApplication.css';

class LApplication extends Component {
  render() {
    const { onActivity } = this.props;
    return (
      <div className="LApplication" onMouseMove={onActivity} onContextMenu={onActivity}>
        <div className="LApplicationOperator">
          <LOperatorPanel />
        </div>
        <div className="LApplication-content">
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
