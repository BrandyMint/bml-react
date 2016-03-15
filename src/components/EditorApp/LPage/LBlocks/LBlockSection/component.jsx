import React, { PropTypes, Component } from 'react';

import LBlockAddButton from '../LBlockAddButton';
import LBlock from '../LBlock';

import partial from 'lodash/partial';
import { TRANSITION_TIMEOUT } from 'constants/animation';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class LBlockSection extends Component {
  render() {
    const { block, index } = this.props;

    // Пример placholer AddButton (<div style={{ height: 30, backgroundColor: '#000' }} />) : null;

    return (
      <div className="LBlocks-section">
        <LBlock block={block} />
        <LBlockAddButton index={index+1} />
      </div>
    );
  };
}

LBlockSection.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default LBlockSection;
