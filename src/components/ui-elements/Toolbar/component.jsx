import React, { PropTypes, Component } from 'react';
import Animated from 'components/primitives/Animated';
import map from 'lodash/map';

import './index.scss';

import classnames from 'classnames';

const POSITIONS = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  render() {
    const { position, Items, Lead } = this.props;
    const classes = classnames('Toolbar', { [`Toolbar--${position}`]: true });
    const onEnter = () => this.setState({ active: true });
    const onLeave = () => this.setState({ active: false });

    const hideableItems = this.state.active && map(Items, (item, index) => (
      <li className="Toolbar-item" key={index}>{item}</li>
    ));
    return (
      <ul className={ classes } onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <li className="Toolbar-item">
          <Lead />
        </li>
        <Animated>
          {hideableItems}
        </Animated>
      </ul>
    );
  }
}

Toolbar.propTypes = {
  position: PropTypes.oneOf(POSITIONS).isRequired,
  Lead: PropTypes.func.isRequired,
  Items: PropTypes.array.isRequired,
}

export default Toolbar;
