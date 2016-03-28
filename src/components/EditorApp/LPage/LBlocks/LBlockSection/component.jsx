import React, { PropTypes, Component } from 'react';
import LBlockAddButton from '../LBlockAddButton';
import LBlock from '../LBlock';

class LBlockSection extends Component {
  render() {
    const { block, index } = this.props;

    // Пример placholer AddButton (<div style={{ height: 30, backgroundColor: '#000' }} />) : null;

    return (
      <div>
        <LBlock block={block} index={index} />
        <LBlockAddButton index={index + 1} />
      </div>
    );
  }
}

LBlockSection.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default LBlockSection;
