import React, { PropTypes } from 'react';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import LBlock from 'components/LBlock';

const Placeholder = () => (
  <div className="LBlocks-placeholder">
    <span>There is no blocks to display</span>
  </div>
);

const LBlocks = ({ blocks }) => (
  <div className="LBlocks">
    {isEmpty(blocks)
      ? <Placeholder />
      : map(blocks, (block) =>
          <LBlock block={block} key={block.uuid} />
        )
    }
  </div>
);

export default LBlocks;