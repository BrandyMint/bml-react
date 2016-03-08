import React, { Component } from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'components/shared/ViewContainer';

import map from 'lodash/map';

import config from 'constants/config';

import './index.css';

const InlineForm1 = ({ block }) => {
  /* eslint-disable react/prop-types */
  const { variantUuid, content, form, uuid } = block;
  /* eslint-enable */

  const method = form.method || 'POST';
  const action = form.url || config('postLeadUrl');
  return (
    <ViewContainer block={ block } >
      <form className="form-inline" acceptCharset="UTF-8" action={action} method={method}>
        <input name="utf8" type="hidden" value="✓" />
        <input
          id="lead_form_variant_uuid"
          name="variant_uuid"
          type="hidden"
          value={variantUuid}
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
      </ViewContainer>
  );
}

export default applyType.FormWithText(InlineForm1);
