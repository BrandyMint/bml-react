import { connect } from 'react-redux';
import BackgroundForm from './BackgroundForm';

import { uploadBackground } from 'actions/variants';

const empty = {};
const mapStateToProps = () => empty;

const actions = { uploadBackground };

export default connect(mapStateToProps, actions)(BackgroundForm);
