import React, { PropTypes } from 'react';
import map from 'lodash/map';
import size from 'lodash/size';
import classnames from 'classnames';

import ViewComponent from 'components/shared/ViewComponent';

import './index.scss';

const Page = ({ blocks, is_boxed, className }) => {
  const classNames = classnames(className, { 'boxed-layout': is_boxed });
  if (size(blocks) > 0) {
    return (
      <div className={classNames}>
        { map(blocks, (block, index) => (<ViewComponent block={block} key={index} />)) }
      </div>
    );
  }

  return (
    <div className={classNames}>
      <div className="PageEmptyPlaceholder">
        <h2 className="PageEmptyPlaceholder-header">
          Сайт еще не готов.
        </h2>
      </div>
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  blocks: PropTypes.array.isRequired,
  is_boxed: PropTypes.bool.isRequired,
};

export default Page;
