import React, { PropTypes } from 'react';

const ContentFormSecrets = ({variantUuid}) => (
  <input
    id="lead_form_variant_uuid"
    name="variant_uuid"
    type="hidden"
    value={variantUuid}
    />
);

ContentFormSecrets.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default ContentFormSecrets;
