import React, { PropTypes } from 'react';

import UnknownView from 'views/unknown';
import { viewsRepository } from 'repositories/ViewsRepository';

const ViewComponent = ({ block }) => {
  const SectionComponent = viewsRepository.getView(block.view) || UnknownView;

  return <SectionComponent {...block} />;
}

ViewComponent.propTypes = {
  block: PropTypes.object.isRequired,
};

export default ViewComponent;
