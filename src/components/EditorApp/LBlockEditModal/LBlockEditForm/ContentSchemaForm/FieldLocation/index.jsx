import React, { Component, PropTypes } from 'react';
import { MapLocationType } from 'views/types/mapType';
import assign from 'lodash/assign';
import FormGroup from '../FormGroup';

const STEP = 0.000001;

export default class FieldLocation extends Component {
  static propTypes = {
    field: PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
    }),
    value: MapLocationType.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { field, value, onChange } = this.props;
    const { title, key } = field;

    const handleChangeLng = (event) => {
      const v = parseFloat(event.target.value.replace(',', '.'));
      onChange(assign(value, { lng: v }));
    };
    const handleChangeLat = (event) => {
      const v = parseFloat(event.target.value.replace(',', '.'));
      onChange(assign(value, { lat: v }));
    };

    return (
      <FormGroup fieldKey={key} title={title}>
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control"
              type="number"
              step={ STEP }
              id={`${key}-lat`}
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
              id={key}
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
