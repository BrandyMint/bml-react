import React, { Component } from 'react';
import { DataPropTypes } from 'views/types/leaderBoard';

import Records from './Records';
//import Editable from 'views/elements/Editable';

const renderDivision = (divistion, index) => (
  <option name={divistion} key={index}>{divistion}</option>
);

const renderEvent = (event, index) => (
  <option name={event} key={index}>{event}</option>
);

const selectRecords = (tables, event, division, sex) => {
  const findTable = (table) => table.event === event &&
      table.division === division &&
      table.sex === sex;

  const table = tables.find(findTable);

  if (table) {
    return table.records;
  }

  return [];
};

class Content extends Component {
  constructor(props) {
    super(props);
    this.onChangeDivision = this.onChangeDivision.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);

    const currentDivision = this.defaultDivision();

    this.state = {
      currentDivision: currentDivision,
      currentEvent: this.defaultEvent(currentDivision),
    };
  }

  onChangeDivision(event) {
    const value = event.target.value;
    this.setState({ currentDivision: value });
  }

  onChangeEvent(event) {
    const value = event.target.value;
    this.setState({ currentEvent: value });
  }

  defaultDivision() {
    // TODO Находить первый дивизион в котором есть данные
    return this.props.divisions[0];
  }

  defaultEvent() {
    // TODO Находить первое собыние в котором есть данные для дивизиона
    return this.props.events[0];
  }

  selectDivision() {
    return (
      <select value={this.state.currentDivision} onChange={this.onChangeDivision}>
        {this.props.divisions.map(renderDivision)}
      </select>
    );
  }

  selectEvent() {
    return (
      <select value={this.state.currentEvent} onChange={this.onChangeEvent}>
        {this.props.events.map(renderEvent)}
      </select>
    );
  }

  render() {
    const { tables} = this.props;

    const recordsForMan = selectRecords(
      tables,
      this.state.currentEvent,
      this.state.currentDivision,
      'male',
    );

    const recordsForWoman = selectRecords(
      tables,
      this.state.currentEvent,
      this.state.currentDivision,
      'female',
    );

    return (
      <div className="LeaderBoard container">
        <div className="row mb40 mb-xs-0">
          <div className="LeaderBoard-categories text-center">
            <span className="LeaderBoard-category">
              {this.selectDivision()}
            </span>
            <span className="LeaderBoard-category">
              {this.selectEvent()}
            </span>
          </div>
        </div>
        <div className="row mb40 mb-xs-0">
          <div className="col-md-6">
            <div className="LeaderBoard-sex text-center mb40">Мужчины</div>
            <Records records={recordsForMan} />
          </div>
          <div className="col-md-6">
            <div className="LeaderBoard-sex text-center mb40">Женщины</div>
            <Records records={recordsForWoman} />
          </div>
        </div>
      </div>
    );
  }
}

Content.propTypes = DataPropTypes;

export default Content;
