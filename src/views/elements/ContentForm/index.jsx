import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import join from 'lodash/join';
import isEmpty from 'lodash/isEmpty';
import config from 'constants/config';
import ContentFormSecrets from './ContentFormSecrets';
import Field from './Field';
import FieldWrapper from './FieldWrapper';
import classnames from 'classnames';
import validation from 'react-validation-mixin';
import strategy from 'react-validatorjs-strategy';

// Именно это ID используется для шорткатов с кнопок на форму
const DEFAULT_FORM_ID = 'form';
const DEFAULT_METHOD = 'POST';

const renderHelpText = (message) => <p className="help-block text-danger">{message}</p>;

const fieldRules = (field) => {
  const schema = [];

  if (field.isRequired) { schema.push('required'); }
  if (field.inputType === 'email') { schema.push('email'); }

  if (isEmpty(schema)) {
    return undefined;
  }
  // inputType === 'tel'
  return join(schema, '|');
};

const fieldsValidator = (result, field) => {
  const rules = fieldRules(field);
  if (rules) { return { ...result, [field.name]: rules }; }

  return result;
};

const validatorJsTypesgenerator = (fields) => (
  strategy.createSchema(
    reduce(fields, fieldsValidator, {}),
    {
      required: 'Это поле обязательно',
      email: 'Тут должен быть email',
    }, // TODO i18n
  )
);

class ContentForm extends Component {
  constructor(props) {
    super(props);
    this.validatorTypes = validatorJsTypesgenerator(props.fields);
    this.getValidatorData = this.getValidatorData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const form = this.refs.form;
    const onValidate = (error) => {
      if (error) {
        // form has errors; do not submit
      } else {
        form.submit();
        // no errors; submit form
      }
    };
    this.props.validate(onValidate);
  }

  getValidatorData() {
    const func = (result, { name }) => (
      {
        ...result,
        [name]: findDOMNode(this.refs[name]).value,
      }
    );

    return reduce(this.props.fields, func, {});
  }

  render() {
    const { isValid, getValidationMessages } = this.props;
    const { children, id, fields, name, method, url, collectionUuid, submitTitle, className } = this.props;

    const classes = classnames('BML-form', className);

    const formMethod = method || DEFAULT_METHOD;
    const action = url || config('postLeadUrl');
    return (
      <form
        ref="form"
        acceptCharset="UTF-8"
        action={action}
        id={id || DEFAULT_FORM_ID}
        name={name}
        onSubmit={this.onSubmit}
        method={formMethod}
        className={classes}
      >
        <ContentFormSecrets collectionUuid={collectionUuid} />
        {children}
        {map(fields, (field, index) =>
           <FieldWrapper key={index} {...field} hasError={!isValid(field.name)}>
             <Field {...field} ref={field.name} />
             {renderHelpText(getValidationMessages(field.name))}
           </FieldWrapper>
        )}
        <div className="form-group">
          <button type="submit" className="BML-button-submit">{submitTitle}</button>
        </div>
      </form>
    );
  }
}

export const propTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,

  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  submitTitle: PropTypes.string.isRequired,
  method: PropTypes.string,
  url: PropTypes.string,
  collectionUuid: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape(Field.propTypes)
  ).isRequired,
  children: PropTypes.node,
};

ContentForm.propTypes = propTypes;

export default validation(strategy)(ContentForm);
