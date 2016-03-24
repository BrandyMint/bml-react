import React from 'react';
import applyType from 'views/types/apply';

import reduce from 'lodash/reduce';
import size from 'lodash/size';
import ViewContainer from 'views/elements/ViewContainer';

import StringEditable from 'views/elements/StringEditable';

import './index.css';

/* eslint-disable react/prop-types */
const Footer1 = ({ block }) => (
  <ViewContainer block={ block } className="BML-section--padding" tagName="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <ul className="list-inline">
          {
            reduce(block.content.items, (acc, item, index) => {
              acc.push((
                <li className="list-inline-item" key={`${index}-item`}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ));

              if (size(block.content.items) > 1 && index < size(block.content.items) - 1) {
                acc.push(
                  <li
                    className="Footer1-menu-divider list-inline-item"
                    key={`${index}-divider`}
                  >
                    ⋅
                  </li>
                );
              }

              return acc;
            }, [])
          }
        </ul>
        <StringEditable
          className="Footer1-copyright text-muted small"
          data={block.content}
          fieldName="text"
          tagName="p"
        />
      </div>
    </div>
   </div>
  </ViewContainer>
);

export default applyType.textWithLinks(Footer1);
