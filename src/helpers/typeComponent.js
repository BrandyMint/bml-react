import React, { PropTypes } from 'react';
import ViewComponents from 'constants/viewComponents';

const TypeComponent = (typeName, viewPropType) => {
  const component = (props) => {
    const ViewComponent = ViewComponents.getViewComponent(typeName, props.viewName);

    return (
      <div className={typeName}>
        {ViewComponent
          ? <ViewComponent {...props} />
          : <span>Unknown viewName of {typeName} {props.viewName}</span>
          }
          </div>
    );
  };

  component.propTypes = {
    content: PropTypes.shape(viewPropType).isRequired,
    form: PropTypes.object,
    viewName: PropTypes.string.isRequired,
  };

  return component;
};

export default TypeComponent;
