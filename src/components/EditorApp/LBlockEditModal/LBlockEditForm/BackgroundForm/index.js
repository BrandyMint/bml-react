import { connect } from 'react-redux';
import BackgroundForm from './BackgroundForm';

import { uploadBackground } from 'actions/variants';

const mapStateToProps = state => state;

const actions = { uploadBackground };

export default connect(mapStateToProps, actions)(BackgroundForm);
