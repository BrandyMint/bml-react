import React, { Component, PropTypes } from 'react';
import config from 'constants/config';

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
    const { tracker, collectionUuid, variantUuid } = this.props;
    const { cookie } = this.state;

    const tracking = JSON.stringify(tracker);

    const viewerUid = config('viewerUid');
    return (
      <div>
        <input name="utf8" type="hidden" value="✓" />
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
        {collectionUuid &&
          <input
            name="collection_uuid"
            type="hidden"
            value={collectionUuid}
          />
          }
        {viewerUid &&
          <input
            name="viewer_uid"
            type="hidden"
            value={viewerUid}
          />
          }
      </div>
    );
  }
}

ContentFormSecrets.propTypes = {
  collectionUuid: PropTypes.string,
  variantUuid: PropTypes.string.isRequired,
  tracker: PropTypes.object.isRequired,
};

export default ContentFormSecrets;
