import React, { Component, PropTypes } from 'react';

import LOperatorSaveButton from 'components/LOperatorSaveButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';

import config from 'constants/config';
import './LOperatorPanel.css';

import CogIcon from 'react-icons/lib/fa/cog';
import BubbleIcon from 'components/ui-elements/BubbleIcon';

class LOperatorPanel extends Component {
  componentDidUpdate() {
    window.onbeforeunload = this.props.hasUnsavedChanges
      ? () => 'Хотите закрыть конструктор, не сохранив изменения?'
      : null;
  }
  render() {
    const {
      hasUnsavedChanges,
      isSaving,
      onSaveChanges,
      hasControlActivity,
    } = this.props;

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="animation"
        transitionEnterTimeout={TRANSITION_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_TIMEOUT}
      >
        {hasControlActivity && (
          <div className="LOperatorPanel">
            {hasUnsavedChanges &&
              <LOperatorSaveButton onSaveChanges={onSaveChanges} isSaving={isSaving} />
              }
              <BubbleIcon >
                <a href={config('exitUrl')}>
                  <CogIcon />
                </a>
            </BubbleIcon>
          </div>)}
      </ReactCSSTransitionGroup>
    );
  }
}

LOperatorPanel.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
  hasControlActivity: PropTypes.bool,
};

export default LOperatorPanel;
