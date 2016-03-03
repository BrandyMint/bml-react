import React, { Component, createElement } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';

// import { Link } from 'react-router';

class PlainHTML extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { html } = this.props.content;
    /* eslint-enable */

    const tagName = 'div';
    const className = 'PlainHTML';

    // return (<div>{html}</div>);

    return createElement(
      tagName,
      {
        className,
        dangerouslySetInnerHTML: { __html: html },
      },
    );
  }
}

export default applyType(PlainHTML, Types.PlainHtml);
