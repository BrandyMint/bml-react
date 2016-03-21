import React, { PropTypes, Component } from 'react';
import Animated from 'components/primitives/Animated';
import map from 'lodash/map';

import './index.scss';

import classnames from 'classnames';

const VERTICAL_POSITIONS = ['top', 'bottom'];
const HORIZONTAL_POSITIONS = ['right', 'left'];

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    const { vertical, horizontal, Items, Lead } = this.props;
    const classes = classnames('Toolbar', {
      [`Toolbar--${vertical}`]: true,
      [`Toolbar--${horizontal}`]: true,
    });
    const onEnter = () => this.setState({ active: true });
    const onLeave = () => this.setState({ active: false });

    const hideableItems = this.state.active && map(Items, (item, index) => (
      <li className="Toolbar-item" key={index}>{item}</li>
    ));
    return (
      <ul className={ classes } onMouseOver={onEnter} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Animated>
          <li className="Toolbar-item">
            <Lead />
          </li>
          {hideableItems}
        </Animated>
      </ul>
    );
  }
}

Toolbar.propTypes = {
  vertical: PropTypes.oneOf(VERTICAL_POSITIONS).isRequired,
  horizontal: PropTypes.oneOf(HORIZONTAL_POSITIONS).isRequired,
  Lead: PropTypes.func.isRequired,
  Items: PropTypes.array,
};

export default Toolbar;
