import React, { Component } from 'react';
import map from 'lodash/map';

import ViewPropType from '../viewPropType';

class BInlineFormType1View1 extends Component {
  static propTypes = ViewPropType;

  render() {
    const { fields, submitTitle } = this.props;
    const FormId = 'form'; // TODO вычислять для каждой формы свой ID
    return (
      <form className="form-inline">
        {map(fields, (field, index) => {
          const key = `${FormId}-${index}`;
          return (
            <div className="form-group" key={index}>
              <label htmlFor={key}>{field.title}</label>
              <input
                type={field.inputType}
                className="form-control"
                id={key}
                placeholder={field.placeholder}
              />
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary">{submitTitle}</button>
      </form>
    );
  }
}

export default BInlineFormType1View1;
