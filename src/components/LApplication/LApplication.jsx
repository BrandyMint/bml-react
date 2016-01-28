import React, { Component, PropTypes } from 'react';

import './LApplication.css';

import LPage from 'components/LPage';
import LOperatorPanel from 'components/LOperatorPanel';
import LBlockAddModal from 'components/LBlockAddModal';
import LBlockEditModal from 'components/LBlockEditModal';

const LApplication = () => (
  <div className="LApplication">
    <div className="LApplication-operator">
      <LOperatorPanel />
    </div>
    <div className="LApplication-content">
      <LPage />
    </div>
    <LBlockAddModal />
    <LBlockEditModal />
  </div>
);

export default LApplication;