import { connect } from 'react-redux';
import component from './component';
import urlParse from 'url-parse';

const selector = ({ site: { public_url }, application: { variantUuid } }) => {
  const url = urlParse(public_url);

  url.query = `variant_uuid=${variantUuid}`;

  return {
    public_url: url.toString(),
  };
};

export default connect(selector)(component);
