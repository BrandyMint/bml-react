import React, { Component, PropTypes } from 'react';

import {
  LOADING_STATE_LOADING,
  LOADING_STATE_FAILURE,
  LOADING_STATE_LOADED,
} from 'constants/loadingStates';

class EditorApplication extends Component {
  componentDidMount() {
    this.props.loadVersion(this.props.params.landingVersionUuid);
  }

  render() {
    const { loadingState, children } = this.props;

    switch (loadingState) {
      case LOADING_STATE_LOADING:
        return (<div>Загружаю..</div>);
      case LOADING_STATE_LOADED:
        return children;
      case LOADING_STATE_FAILURE:
        return (<div>Произошла ошибка при загрузке</div>);
      default:
        return (<div>Ничего не происходит, это странно..</div>);
    }
  }
}

EditorApplication.propTypes = {
  loadVersion: PropTypes.func.isRequired,
  loadingState: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  params: PropTypes.shape({
    landingVersionUuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditorApplication;
