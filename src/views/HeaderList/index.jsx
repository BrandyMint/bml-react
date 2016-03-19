import React, { Component } from 'react';
import ViewContainer from 'components/shared/ViewContainer';
import applyType from 'views/types/apply';
import map from 'lodash/map';

// Multicolumn lists http://alistapart.com/article/multicolumnlists

import StringEditable from 'components/primitives/StringEditable';

class HeaderList extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { content } = block;
    /* eslint-enable */

    return (
      <ViewContainer block={ block } className="BML-section--padding">
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
             <div className="col-md-10 col-md-offset-1">
               <div className="columns-2">
                 <ol className="list-inside">
                   {map(content.items, (item, index) =>
                    <li
                      key={index}
                      className={'mb40'}
                    >
                      {item.title}
                    </li>
                   )}
                 </ol>
               </div>
             </div>
           </div>

        </div>
      </ViewContainer>
    );
  }
}

export default applyType.headerList(HeaderList);
