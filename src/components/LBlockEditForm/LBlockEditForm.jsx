import React from 'react';

import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

const LBlockEditForm = () => (
  <Tabs>
    <Tab eventKey={1} title="Контент">Управление контентом</Tab>
    <Tab eventKey={2} title="Фон">Управление фоном</Tab>
    <Tab eventKey={3} title="Стили">Управление стилями</Tab>
  </Tabs>
);

export default LBlockEditForm;
