import './LBlockLayer.css';

import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import LBlockSettingsButton from 'components/LBlockSettingsButton';
import LBlockViewChanger from 'components/LBlockViewChanger';
import LBlockPositionChanger from 'components/LBlockPositionChanger';

class LBlockLayer extends Component {
  render() {
    const {
      block, children, isEditMode, hasMultipleBlocks, hasMultipleViews,
      onBlockPositionDown, onBlockPositionUp, onViewSwitchNext, onViewSwitchPrev,
    } = this.props;

    const layerClasses = classnames({
      'LBlockLayer': true,
      'is-editing': isEditMode,
    });

    const title = block.view.replace('LBlock', '');
    return (
      <div className={layerClasses}>
        {isEditMode && (
          <div className="LBlockLayer-topPanel">
            <div className="LBlockLayer-actions">
              <LBlockSettingsButton />
              {hasMultipleViews &&
                <LBlockViewChanger
                  onViewSwitchNext={() => onViewSwitchNext(block.uuid)}
                  onViewSwitchPrev={() => onViewSwitchPrev(block.uuid)}
                />
              }
              {hasMultipleBlocks &&
                <LBlockPositionChanger
                  onBlockPositionDown={() => onBlockPositionDown(block.uuid)}
                  onBlockPositionUp={() => onBlockPositionUp(block.uuid)}
                />
              }
            </div>
            <div className="LBlockLayer-viewInfo Bubble text-muted">
              {title}
            </div>
          </div>
        )}
        {Children.only(children)}
      </div>
    );
  }
}

LBlockLayer.propTypes = {
  block: PropTypes.object,
  isEditMode: PropTypes.bool,
  hasMultipleViews: PropTypes.bool,
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;
