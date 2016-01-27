import React, { Component, PropTypes } from 'react';

import reduce from 'lodash/reduce';
import size from 'lodash/size';

import StringEditable from 'components/primitives/StringEditable';

const BFooterType1View1 = (data) => {
  const { copyrightText, items } = data;

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-inline">
              {
                reduce(items, (acc, item, index) => {
                  acc.push((
                    <li className="list-inline-item" key={index + '-item'}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ));

                  if (size(items) > 1 && index < size(items) - 1) {
                    acc.push(
                      <li className="footer-menu-divider list-inline-item" key={index + '-divider'}>⋅</li>
                    );
                  }

                  return acc;
                }, [])
              }
            </ul>
            <StringEditable
              className="copyright text-muted small"
              data={data}
              fieldName="copyrightText"
              tagName="p"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

BFooterType1View1.propTypes = {
  copyrightText: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default BFooterType1View1;