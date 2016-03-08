import React, { PropTypes } from 'react';
import map from 'lodash/map';
import classnames from 'classnames';

import ViewComponent from 'components/shared/ViewComponent';

const ShowApp = ({ blocks, className, children }) => {
  const classNames = classnames(className, 'BML-App BML-AppShow');
  return (
    <div className={ classNames }>
      {
        map(blocks, (block, index) => (<ViewComponent block={block} key={index} />))
      }
      {children}
    </div>
  );
};

ShowApp.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default ShowApp;
