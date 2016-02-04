import React, { Component, PropTypes } from 'react';
import CustomPropTypes from 'constants/customPropTypes';
import assign from 'lodash/assign';
import FormGroup from '../FormGroup';

const STEP = 0.000001;

export default class FieldLocation extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    fieldKey: PropTypes.string.isRequired,
    value: CustomPropTypes.location.isRequired,
    isRequired: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { title, fieldKey, value, onChange } = this.props;

    const handleChangeLng = (event) => {
      const v = parseFloat(event.target.value.replace(',', '.'));
      onChange(assign(value, { lng: v }));
    };
    const handleChangeLat = (event) => {
      const v = parseFloat(event.target.value.replace(',', '.'));
      onChange(assign(value, { lat: v }));
    };

    return (
      <FormGroup fieldKey={fieldKey} title={title}>
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control"
              type="number"
              step={ STEP }
              id={`${fieldKey}-lat`}
              value={value.lat}
              onChange={handleChangeLat}
            />
            <small className="text-muted">Широта</small>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="number"
              step={ STEP }
              id={fieldKey}
              value={value.lng}
              onChange={handleChangeLng}
            />
            <small className="text-muted">Долгота</small>
          </div>
        </div>
      </FormGroup>
    );
  }
}
