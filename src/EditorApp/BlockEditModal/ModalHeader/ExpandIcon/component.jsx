import React, { PropTypes, Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';

class ExpandIcon extends Component {
  constructor(props) {
    super(props);
    this.onTouchTap = this.onTouchTap.bind(this);
  }
  onTouchTap() {
    if (this.props.expand) {
      this.props.collapseModal();
    } else {
      this.props.expandModal();
    }
  }
  render() {
    const { expand } = this.props;
    const IconClass = expand ? ExpandLessIcon : ExpandMoreIcon;
    return <IconButton onTouchTap={this.onTouchTap} ><IconClass /></IconButton>;
  }
}

ExpandIcon.propTypes = {
  expand: PropTypes.bool.isRequired,
  expandModal: PropTypes.func.isRequired,
  collapseModal: PropTypes.func.isRequired,
};

export default ExpandIcon;
