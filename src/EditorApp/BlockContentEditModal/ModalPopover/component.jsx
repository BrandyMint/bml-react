/* eslint-disable */

import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';
import BodyClassName from 'react-body-classname';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
// import Modal from 'components/ui-elements/Modal';

import './index.css';


const TotalHeight = 400;
const HeaderHeight = 45;

const STYLE = {
  padding: '0 20px 20px 20px',
  width: '100%',
  maxWidth: 'none',
  bottom: 0, // Высота строки с actions
  position: 'fixed',
  height: TotalHeight,
  backgroundColor: 'white',
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

    if (!open) {
      return null;
    }

    return (
      <BodyClassName className="EditorStopScrolling">
        <Paper style={STYLE} rounded={false} zDepth={3} >
          <Header title={t('title', { name: savedBlock.viewName })} onClose={this.handleCancel} />
           <Content>
            {children}
          </Content>
        </Paper>
      </BodyClassName>
    );
  }
}

const CONTENT_STYLE = {
  overflowY: 'auto',
  height: TotalHeight - HeaderHeight - 40, // padding
};

const Content = ({ children } ) => (
  <div style={CONTENT_STYLE} >
    {children}
  </div>
)

const CLOSE_BUTTON_STYLE = {
  position: 'absolute',
  right: 0,
  top: 0,
};

const HEADER_STYLE = {
  width: '100%',
  height: HeaderHeight,
};

const Header = ({ title, onClose} ) => (
  <div style={HEADER_STYLE}>
    <h3>{title}</h3>
    <div onTouchTap={onClose} style={CLOSE_BUTTON_STYLE}><IconButton><CloseIcon /></IconButton></div>
  </div>
)

BlockContentEditModal.propTypes = {
  t: PropTypes.func.isRequired,

  children: PropTypes.element.isRequired,

  open: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  savedBlock: PropTypes.object.isRequired,
};

export default translate('block_edit_modal')(BlockContentEditModal);
