import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
// import Modal from 'components/ui-elements/Modal';
import LBlockEditForm from './LBlockEditForm';

class LBlockEditModal extends Component {
  //shouldComponentUpdate(nextProps, nextState) {
    //// Продиводействуем внешним изменениям. Потому что во время редактирования блока
    //// меняется только то, что мы меняем в блоке
    //return this.state !== nextState || nextProps.isVisible !== this.props.isVisible;
  //}

  shouldComponentUpdate(nextProps) {
    const should = nextProps.isVisible !== this.props.isVisible  ||
      nextProps.savedBlock !== this.props.savedBlock;

    return should;
  }

  render () {
    const { t, savedBlock, isVisible, onCancel, onSave } = this.props;

    const handleCancel = () => onCancel(savedBlock);

    const actions = [
      <FlatButton
        label={t('cancel')}
        secondary
        onTouchTap={handleCancel}
      />,
      <FlatButton
        label={t('submit')}
        primary
        keyboardFocused
        onTouchTap={onSave}
      />,
    ];

    // Изменяем состояние чтобы Dialog перерендерился и установил себе новые размеры
    //
    const resizeDialog = () => this.setState({ timestamp: new Date() });

    return (
      <Dialog
        ref="dialog"
        title={t('title', { name: savedBlock.viewName })}
        open={isVisible}
        modal={false}
        actions={actions}
        repositionOnUpdate
        autoDetectWindowHeight={false}
        autoScrollBodyContent
        onRequestClose={handleCancel}
      >
        {isVisible && <LBlockEditForm onChange={resizeDialog} />}
      </Dialog>
    );
  }
}

LBlockEditModal.propTypes = {
  t: PropTypes.func.isRequired,

  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  savedBlock: PropTypes.object.isRequired,
};

export default translate('block_edit_modal')(LBlockEditModal);
