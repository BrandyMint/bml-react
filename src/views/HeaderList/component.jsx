import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash/map';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import ViewContainer from 'components/shared/ViewContainer';

// import { Link } from 'react-router';

class View extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    /* eslint-enable */

    const itemClass = (index) => classnames({
        'col-md-5': true,
        'col-sm-6': true,
        'mb40': true,
        'col-md-offset-1': index % 2 == 0
      })
    return (
      <ViewContainer block={ block } className="BML-section--padding bg-secondary">
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
            <ol>
              {map(content.items, (item, index) =>
                 <li key={index} className={itemClass(index)}>
                  {item.title}
                </li>
              )}
            </ol>
          </div>
        </div>
      </ViewContainer>
    );
  }
}

export default applyType(View, Types.HeaderList);
