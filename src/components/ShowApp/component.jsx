import React, { PropTypes } from 'react';
import map from 'lodash/map';
import classnames from 'classnames';

import Tracker from 'components/Tracker';

import ViewComponent from 'components/shared/ViewComponent';

const ShowApp = ({ blocks, className, children }) => {
  const classNames = classnames(className, 'BML-App BML-AppShow');
  return (
    <Tracker>
      <div className={ classNames }>
        {
          map(blocks, (block, index) => (<ViewComponent block={block} key={index} />))
        }
        {children}
      </div>
    </Tracker>
  );
};

ShowApp.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default ShowApp;
