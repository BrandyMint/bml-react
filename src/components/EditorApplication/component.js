import React, { Component, PropTypes } from 'react';

import LApplicationEditor from 'components/LApplicationEditor';
import {
  LOADING_STATE_LOADING,
  LOADING_STATE_FAILURE,
  LOADING_STATE_LOADED,
} from 'constants/loadingStates';

class EditorApplication extends Component {
  componentDidMount() {
    this.props.loadVersion(this.props.params.landing_version_uuid);
  }

  render() {
    const { loadingState } = this.props;

    switch (loadingState) {
      case LOADING_STATE_LOADING:
        return (<div>Загружаю..</div>);
      case LOADING_STATE_LOADED:
        return (<LApplicationEditor />);
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
  params: PropTypes.shape({
    landing_version_uuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditorApplication;
