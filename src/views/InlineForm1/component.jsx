import React, { Component } from 'react';
import map from 'lodash/map';

import config from 'constants/config';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

import './index.css';

class InlineForm1 extends Component {
  static propTypes = Types.inlineForm.propTypes;

  render() {
    /* eslint-disable react/prop-types */
    const { landingVersionUuid, content, form, uuid } = this.props;
    /* eslint-enable */

    const method = form.method || 'POST';
    const action = config.api.leadUrl;
    return (
      <form className="form-inline" acceptCharset="UTF-8" action={action} method={method}>
        <input name="utf8" type="hidden" value="✓" />
        <input
          id="lead_form_landing_version_uuid"
          name="landing_version_uuid"
          type="hidden"
          value={landingVersionUuid}
        />
        { content.title && (<span className="InlineForm1-title">{content.title}</span>)}
        {map(form.fields, (field, index) => {
          const key = `${uuid}-${index}`;
          return (
            <div className="form-group" key={index}>
              <label htmlFor={key}>{field.title}</label>
              <input
                type={field.inputType}
                className="form-control"
                name={field.key}
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

export default applyType(InlineForm1, Types.inlineForm);
