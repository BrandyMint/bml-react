import React, { Component, PropTypes } from 'react';

class ContentFormSecrets extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cookie: null,
    };
  }
  componentDidMount() {
    this.setCookie();
  }
  setCookie() {
    this.setState({
      cookie: document.cookie,
    });
  }
  render() {
    const { tracker, variantUuid } = this.props;
    const { cookie } = this.state;

    const tracking = JSON.stringify(tracker);
    return (
      <div>
        <input
          name="tracking"
          type="hidden"
          value={tracking}
        />
        <input
          name="cookie"
          type="hidden"
          value={cookie}
        />
        <input
          name="variant_uuid"
          type="hidden"
          value={variantUuid}
        />
      </div>
    );
  }
}

ContentFormSecrets.propTypes = {
  variantUuid: PropTypes.string.isRequired,
  tracker: PropTypes.object.isRequired,
};

export default ContentFormSecrets;
