import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)  {
    this.props.onChange(this.props.attribute, event.target.value);
  }

  render() {
    const {
      placeholder,
      title,
      value,

      ...props,
    }= this.props;

    return (
      <TextField
        {...props}
        hintText={placeholder}
        floatingLabelText={title}
        defaultValue={value}
        onBlur={this.handleChange}
      />
    );
  }
}

Attribute.propTypes = {
  attribute: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Attribute;
