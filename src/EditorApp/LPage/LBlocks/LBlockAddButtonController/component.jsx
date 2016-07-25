import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import LBlockAddButton from '../LBlockAddButton';
import styles from './styles.css';

class LBlockAddButtonController extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    const { index } = this.props;
    const { show } = this.state;

    if (show) {
      return (
        <LBlockAddButton index={index}/>
      )
    } else {
      return (
        <div className='LBlockAddController'>
          <LBlockAddButton index={index} className='LBlockAddButton-middle'/>
        </div>
      );
    }
  };
}

LBlockAddButtonController.propTypes = {
  index: PropTypes.number.isRequired,
};

export default LBlockAddButtonController;
