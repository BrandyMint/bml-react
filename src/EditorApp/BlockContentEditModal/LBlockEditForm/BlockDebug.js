import React, { Component, PropTypes } from 'react';

class BlockDebug extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.block !== nextProps.block;
  }
  render() {
    const { block } = this.props;
    return (
      <pre>
        <code className="LBlockEditForm-code">
          {JSON.stringify(block, undefined, 2)}
        </code>
      </pre>
    );
  }
}

BlockDebug.propTypes = {
  block: PropTypes.object.isRequired,
}

export default BlockDebug;
