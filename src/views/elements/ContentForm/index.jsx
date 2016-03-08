import React, { PropTypes } from 'react';
import map from 'lodash/map';
import config from 'constants/config';
import ContentFormSecrets from 'views/elements/ContentFormSecrets';
import Field from './Field';

// TODO formName в context для Field

const ContentForm = (props) => {
  const { id, fields, name, method, url, submitTitle } = props;

  const formMethod = method || 'POST';
  const action = url || config('postLeadUrl');
  return (
    <form acceptCharset="UTF-8" action={action} id={id} name={name} method={formMethod}>
      <input name="utf8" type="hidden" value="✓" />
      <ContentFormSecrets />
      {map(fields, (field, index) => <Field key={index} {...field} />)}
      <button type="submit">{submitTitle}</button>
    </form>
  );
};

export const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  submitTitle: PropTypes.string.isRequired,
  method: PropTypes.string,
  url: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape(Field.propTypes)
  ).isRequired,
};

ContentForm.propTypes = propTypes;

export default ContentForm;
