import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';

class View extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="ViewTemplate">
        {text}
      </div>
    );
  }
}


View.propTypes = {
  text: PropTypes.string.isRequired,
};

export default View;
