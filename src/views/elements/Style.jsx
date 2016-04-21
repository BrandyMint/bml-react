import React, { PropTypes } from 'react';

const Style = ({children}) => (
  <style type='text/css' dangerouslySetInnerHTML={{ __html: children }} />
);

Style.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Style;
