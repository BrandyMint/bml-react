import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

// import { Link } from 'react-router';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { html } = this.props.content;
    /* eslint-enable */

    return (
      <div className="BML-section-padding container">
        {html}
      </div>
    );
  }
}

export default applyType(View, Types.PlainHtml);
