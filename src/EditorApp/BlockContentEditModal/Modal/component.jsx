import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
// import Modal from 'components/ui-elements/Modal';

import './index.css';

class BlockContentEditModal extends Component {
  constructor(props) {
    super(props);
    const { t, savedBlock, onCancel, onSave } = props;
    this.handleCancel = () => onCancel(savedBlock);
    this.actions = [
      <FlatButton
        label={t('cancel')}
        secondary
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label={t('submit')}
        primary
        keyboardFocused
        onTouchTap={onSave}
      />,
    ];
  }

  shouldComponentUpdate(nextProps) {
    const should = nextProps.isVisible !== this.props.isVisible  ||
      nextProps.savedBlock !== this.props.savedBlock;

    return should;
  }

  render () {
    const { t, savedBlock, open, children } = this.props;

    console.log("Render dialog", open);

    return (
      <Dialog
        title={t('title', { name: savedBlock.viewName })}
        open={open}
        modal={false}
        actions={this.actions}
        repositionOnUpdate
        autoDetectWindowHeight={false}
        autoScrollBodyContent
        onRequestClose={this.handleCancel}
      >
        {open && children}
      </Dialog>
    );
  }
}

BlockContentEditModal.propTypes = {
  t: PropTypes.func.isRequired,

  children: PropTypes.element.isRequired,

  open: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  savedBlock: PropTypes.object.isRequired,
};

export default translate('block_edit_modal')(BlockContentEditModal);
