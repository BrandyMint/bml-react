import React, { PropTypes, Component } from 'react';
import Animated from 'components/primitives/Animated';
import map from 'lodash/map';
import concat from 'lodash/concat';

import './index.scss';

import classnames from 'classnames';

const VERTICAL_POSITIONS = ['top', 'bottom'];
const HORIZONTAL_POSITIONS = ['right', 'left'];

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: props.open };
  }

  render() {
    const { vertical, horizontal, Items, Lead, hide, open } = this.props;
    const classes = classnames('Toolbar', {
      [`Toolbar--${vertical}`]: true,
      [`Toolbar--${horizontal}`]: true,
    });
    const onEnter = () => this.setState({ active: true });
    const onLeave = () => this.setState({ active: open });

    const hideableItems = map(Items, (item, index) => (
      <li className="Toolbar-item" key={index}>{item}</li>
    ));

    const mainItem = (
      <li className="Toolbar-item" key="main">
        <Lead />
      </li>
    );
    const content = this.state.active ? concat(mainItem, hideableItems) : mainItem;
    return (
      <ul className={ classes } onMouseOver={onEnter} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Animated>
          {!hide && content}
        </Animated>
      </ul>
    );
  }
}

Toolbar.defaultProps = {
  open: false,
};

Toolbar.propTypes = {
  open: PropTypes.bool,
  hide: PropTypes.bool,
  vertical: PropTypes.oneOf(VERTICAL_POSITIONS).isRequired,
  horizontal: PropTypes.oneOf(HORIZONTAL_POSITIONS).isRequired,
  Lead: PropTypes.func.isRequired,
  Items: PropTypes.array,
};

export default Toolbar;
