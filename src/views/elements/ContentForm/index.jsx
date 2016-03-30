import React, { PropTypes } from 'react';
import map from 'lodash/map';
import config from 'constants/config';
import ContentFormSecrets from './ContentFormSecrets';
import Field from './Field';
import FieldWrapper from './FieldWrapper';
import classnames from 'classnames';

// Именно это ID используется для шорткатов с кнопок на форму
const DEFAULT_FORM_ID = 'form';
const DEFAULT_METHOD = 'POST';

// TODO formName в context для Field

const ContentForm = (props) => {
  const { children, id, fields, name, method, url, submitTitle, className } = props;

  const classes = classnames('BML-form', className);

  const formMethod = method || DEFAULT_METHOD;
  const action = url || config('postLeadUrl');
  return (
    <form
      acceptCharset="UTF-8"
      action={action}
      id={id || DEFAULT_FORM_ID}
      name={name}
      method={formMethod}
      className={classes}
    >
      <input name="utf8" type="hidden" value="✓" />
      <ContentFormSecrets />
      {children}
      {map(fields, (field, index) =>
         <FieldWrapper key={index} {...field}>
           <Field {...field} />
         </FieldWrapper>
       )}
      <div className="form-group">
        <button type="submit" className="BML-button-submit">{submitTitle}</button>
      </div>
    </form>
  );
};

export const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  submitTitle: PropTypes.string.isRequired,
  method: PropTypes.string,
  url: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape(Field.propTypes)
  ).isRequired,
  children: PropTypes.node,
};

ContentForm.propTypes = propTypes;

export default ContentForm;
