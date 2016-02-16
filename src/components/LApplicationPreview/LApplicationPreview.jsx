import React, { Component } from 'react';
import map from 'lodash/map';

import BlockView from 'components/BlockView';

import './index.css';

class LApplication extends Component {
  render() {
    const { blocks } = this.props;
    return (
      <div className='LApplication'>
        <div className='LApplication-content'>
        {
          map(blocks, (block, index) => ( <BlockView block={block} key={index} />))
        }
        </div>
      </div>
    );
  }
}

export default LApplication;
