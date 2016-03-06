import React from 'react';

import reduce from 'lodash/reduce';
import size from 'lodash/size';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import ViewContainer from 'components/shared/ViewContainer';

import StringEditable from 'components/primitives/StringEditable';

import './index.css';

const Footer1 = ({ block}) => (
  <ViewContainer block={ block } className="BML-section--padding container" tagName="footer">
    <div className="row">
      <div className="col-lg-12">
        <ul className="list-inline">
          {
            reduce(block.content.items, (acc, item, index) => {
              acc.push((
                <li className="list-inline-item" key={`${index}-item`}>
                  <a href={item.url}>{item.title}</a>
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
          fieldName="copyrightText"
          tagName="p"
        />
      </div>
    </div>
  </ViewContainer>
);

export default applyType(Footer1, Types.footer);
