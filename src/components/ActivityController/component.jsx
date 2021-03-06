import { Component, PropTypes } from 'react';

class ActivityController extends Component {
  componentDidMount() {
    // Временно отключил, так как всеравно этим никто не пользуется
    // window.addEventListener('mousemove', this.props.startActivity);
  }

  componentWillUnmount() {
    // window.removeEventListener('mousemove', this.props.startActivity);
  }

  render() {
    return this.props.children;
  }
}

ActivityController.propTypes = {
  startActivity: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ActivityController;
