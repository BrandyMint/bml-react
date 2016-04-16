import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
// import Modal from 'components/ui-elements/Modal';

import './index.css';

const CONTENT_STYLE = {
  width: '100%',
  maxWidth: 'none',
  bottom: 60, // Высота строки с actions
  position: 'absolute',
};

const BODY_STYLE = {
};

const DIALOG_STYLE ={
  // backgroundColor: 'black',
};

const CONTAINER_STYLE = {
  height: 400,
  overflowY: 'auto',
};

class BlockContentEditModal extends Component {
  constructor(props) {
    super(props);
    const { t, onSave } = props;
    this.handleCancel = this.handleCancel.bind(this);
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
    const should = nextProps.open !== this.props.open  ||
      nextProps.savedBlock !== this.props.savedBlock;

    return should;
  }

  handleCancel() {
    const { onCancel, savedBlock } = this.props;
    onCancel(savedBlock);
  }

  render () {
    const { t, savedBlock, open, children } = this.props;

    console.log("Render dialog", open);

    const title = savedBlock && t('title', { name: savedBlock.viewName });
    return (
      <Dialog
        title={title}
        open={open}
        style={DIALOG_STYLE}
        contentStyle={CONTENT_STYLE}
        bodyStyle={BODY_STYLE}
        modal={false}
        actions={this.actions}
        onRequestClose={this.handleCancel}
      >
        <div style={CONTAINER_STYLE}>
          {open && children}
        </div>
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
