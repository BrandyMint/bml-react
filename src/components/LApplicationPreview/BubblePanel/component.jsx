import React, { Component, PropTypes } from 'react';
import ExitIcon from 'react-icons/lib/go/screen-normal';
import BubbleIcon from 'components/ui-elements/BubbleIcon';

class BubblePanel extends Component {
  render() {
    const { landingVariantUuid } = this.props;
    return (
      <div className="BubblePanel">
        <BubbleIcon to={`/editor/${landingVariantUuid}`}>
          <ExitIcon />
        </BubbleIcon>
      </div>
    );
  }
}

BubblePanel.propTypes = {
  landingVariantUuid: PropTypes.string.isRequired,
};

export default BubblePanel;
