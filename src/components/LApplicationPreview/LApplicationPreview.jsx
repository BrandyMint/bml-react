import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

import BubblePanel from './BubblePanel';
import ViewComponent from 'components/shared/ViewComponent';

import './index.css';

class LApplication extends Component {
  render() {
    const { blocks } = this.props;
    return (
      <div className="LApplication">
        <div className="LApplication-content">
        {
          map(blocks, (block, index) => (<ViewComponent block={block} key={index} />))
        }
        </div>
        <BubblePanel />
      </div>
    );
  }
}

LApplication.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default LApplication;
