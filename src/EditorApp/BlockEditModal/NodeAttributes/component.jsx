import React, { Component, PropTypes } from 'react';

import Attribute from './Attribute';

class NodeAttributes extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const should =  this.props.nodeAttributes !== nextProps.nodeAttributes ||
      this.props.uuid !== nextProps.uuid;
    return should;
  }

  onChange(path, value) {
    this.props.changeNodeAttribute(this.props.uuid, path, value);
  }
  render() {
    const { nodeAttributes, uuid } = this.props;

    // TODO i18n
    return (
      <div className="TabPage">
        <Attribute
          attribute="id"
          placeholder="Введите идентификатор блока"
          fullWidth
          title="Аттрибут ID у HTML-элемента"
          value={nodeAttributes.id || uuid}
          onChange={this.onChange}
        />
        <Attribute
          attribute="class"
          placeholder="Введите название класса у блока"
          fullWidth
          title="Аттрибут class у HTML-элемента"
          value={nodeAttributes.class}
          onChange={this.onChange}
        />
        <Attribute
          attribute="style"
          title="CSS-Стили"
          fullWidth
          multiLine
          value={nodeAttributes.style}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

NodeAttributes.defaultProps = {
  nodeAttributes: {},
};

NodeAttributes.propTypes = {
  nodeAttributes: PropTypes.object,
  uuid: PropTypes.string.isRequired,
  changeNodeAttribute: PropTypes.func.isRequired,
};

export default NodeAttributes;
