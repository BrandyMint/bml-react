import React, { Component, PropTypes } from 'react';

import {
  LOADING_STATE_LOADING,
  LOADING_STATE_FAILURE,
  LOADING_STATE_LOADED,
} from 'constants/loadingStates';

class LandingLoader extends Component {
  componentDidMount() {
    this.props.loadVariant(this.props.params.variantUuid);
  }

  render() {
    const { loadingState, children } = this.props;

    let result;

    switch (loadingState) {
      case LOADING_STATE_LOADING:
        result = (<div>Загружаю..</div>);
        break;
      case LOADING_STATE_LOADED:
        result = children;
        break;
      case LOADING_STATE_FAILURE:
        result = (<div>Произошла ошибка при загрузке</div>);
        break;
      default:
        result = (<div>Ничего не происходит, это странно..</div>);
    }

    return result;
  }
}

LandingLoader.propTypes = {
  loadVariant: PropTypes.func.isRequired,
  loadingState: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  params: PropTypes.shape({
    variantUuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingLoader;
