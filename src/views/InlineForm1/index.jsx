import React, { Component } from 'react';
import map from 'lodash/map';

import { Types, makeView } from 'views/types';

import './index.css';

class InlineForm1 extends Component {
  static propTypes = Types.inlineForm.propTypes;

  render() {
    const { content, form, uuid } = this.props;
    return (
      <form className="form-inline">
        { content.title && (<span>{content.title}</span>)}
        {map(form.fields, (field, index) => {
          const key = `${uuid}-${index}`;
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
        <button type="submit" className="btn btn-primary">{form.submitTitle}</button>
      </form>
    );
  }
}

export default makeView(InlineForm1, Types.inlineForm);
