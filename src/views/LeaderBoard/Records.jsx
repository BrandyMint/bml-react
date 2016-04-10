import React, { Component, PropTypes } from 'react';
import Animated from 'components/primitives/Animated';
import Record from './Record';
import { RecordPropTypes } from 'views/types/leaderBoard';

// TODO ii18n
class Records extends Component {
  renderNoResults() {
    if (this.props.records.length > 0) {
      return <noscript />;
    }

    return (<div className="LeaderBoard-table--empty">Нет результатов</div>);
  }

  render() {
    const { records } = this.props;

    return (
      <div className="LeaderBoard-table">
        <Animated>
          {records.map(Record)}
          {this.renderNoResults()}
        </Animated>
      </div>
    );
  }
}

Records.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape(RecordPropTypes)).isRequired,
};

export default Records;
