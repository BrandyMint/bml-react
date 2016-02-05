import React, { PropTypes } from 'react';
import ViewComponents from 'constants/viewComponents';

const TypeComponent = (typeName, viewPropType) => {
  const component = (props) => {
    const ViewComponent = ViewComponents.getViewComponent(typeName, props.view);

    return (
      <div className={typeName}>
        {ViewComponent
          ? <ViewComponent {...props} />
          : <span>Unknown view of {typeName} {props.view}</span>
          }
          </div>
    );
  };

  component.propTypes = {
    content: PropTypes.shape(viewPropType).isRequired,
    form: PropTypes.object,
    view: PropTypes.string.isRequired,
  };

  return component;
};

export default TypeComponent;
