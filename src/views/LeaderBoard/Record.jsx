import React from 'react';

import { RecordPropTypes } from 'views/types/leaderBoard';

const renderRecordTitle = (title, note) => {
  if (note) {
    return (<div>
        <div className="LeaderBoard-row-title LeaderBoard-row-title--withNote">
          {title}
        </div>
        <div className="LeaderBoard-row-note">
          {note}
        </div>
      </div>
    );
  }

  return (<div className="LeaderBoard-row-title">{title}</div>);
};

const Record = ({ title, note, rank, score }, index) => (
  <div className="LeaderBoard-row" key={index}>
    <div className="LeaderBoard-row-userInfo">
      <div className="LeaderBoard-row-rank">{rank}</div>
      {renderRecordTitle(title, note)}
    </div>
    <div className="LeaderBoard-row-score-container">
      <div className="LeaderBoard-row-score-value">
        {score}
      </div>
    </div>
  </div>
);

Record.propTypes = RecordPropTypes;

export default Record;
