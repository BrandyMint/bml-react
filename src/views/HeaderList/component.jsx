import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash/map';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';

// import { Link } from 'react-router';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    /* eslint-enable */

    const itemClass = (index) => classnames({
        'col-md-5': true,
        'col-sm-6': true,
        'col-md-offset-1': index % 2 == 0
      })
    return (
      <div className="BML-section-padding bg-secondary">
        <div className="container">
          <div className="row mb64 mb-xs-24">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
              <StringEditable
                className="BML-h2 color-primary"
                data={content}
                fieldName="header"
                tagName="h2"
              />
            </div>
          </div>
          <div className="row">
            {map(content.items, (item, index) =>
               <div key={index} className={itemClass(index)}>
                <p className="mb24">{item.title}</p>
              </div>
             )}
          </div>
        </div>
      </div>
    );
  }
}

export default applyType(View, Types.HeaderList);
