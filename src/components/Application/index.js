import React, { Component } from 'react';

import './style.css';

class Application extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-8 col-md-4">
            Hello
          </div>
          <div className="col-xs-6 col-sm-4 col-md-8">
            world!
          </div>
        </div>
      </div>
    );
  }
}

export default Application;