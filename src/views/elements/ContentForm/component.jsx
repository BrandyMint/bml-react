import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import config from 'constants/config';
import ContentFormSecrets from 'views/elements/ContentFormSecrets';

const Field = ({key, title, placeholder, inputType}, index) => {
  return (
    <div className="form-group" key={index}>
      { title && (<label htmlFor={`${name}-${index}`}>{title}</label>)}
      <input
        type={inputType}
        className="form-control"
        name={key}
        id={`${name}-${index}`}
        placeholder={placeholder}
      />
    </div>
  );
}

const ContentForm = (props) => {
  const { fields, method, url, submitTitle, variantUuid } = props;

  const formMethod = method || 'POST';
  const action = url || config('postLeadUrl');
  return (
    <form acceptCharset="UTF-8" action={action} method={formMethod}>
      <input name="utf8" type="hidden" value="✓" />
      <ContentFormSecrets />
      {map(fields, (field, index) => <Field key={index} {...field} />)}
      <button type="submit">{submitTitle}</button>
    </form>
  );
}

ContentForm.propTypes = { // TODO из customPropTypes
  method: PropTypes.string,
  url: PropTypes.string,
};

export default ContentForm;
