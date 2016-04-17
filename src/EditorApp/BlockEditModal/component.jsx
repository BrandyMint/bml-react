import React, { PropTypes, Component } from 'react';
import { translate } from 'react-i18next';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ModalHeader from './ModalHeader'
import ContentSchemaForm from 'components/ContentSchemaForm';
import { CONTENT_TAB, FORM_TAB, BACKGROUND_TAB, NODEATTRIBUTES_TAB } from 'actions/editBlockForm';

const CONTENT_STYLE = {
  width: '100%',
  maxWidth: 'none',
  bottom: 60, // Высота строки с actions
  position: 'absolute',
};

const CONTAINER_STYLE = {
  height: 400,
  overflowY: 'auto',
};

class BlockEditModal extends Component {
  constructor(props) {
    super(props);
    const { t, onSubmit } = props;
    this.actions = [
      <FlatButton
        label={t('submit')}
        primary
        keyboardFocused
        onTouchTap={onSubmit}
      />,
    ];
  }

  shouldComponentUpdate(nextProps) {
    const should = nextProps.open !== this.props.open ||
      nextProps.expand !== this.props.expand ||
      nextProps.tab !== this.props.tab;
    return should;
  }

  getTabElement() {
    const { tab } = this.props;

    let element;
    switch (tab) {
      case CONTENT_TAB:
        element = <ContentSchemaForm />;
        break;
      case FORM_TAB:
        element = (<div>form</div>);
        break;
      case BACKGROUND_TAB:
        element = (<div>background</div>);
        break;
      case NODEATTRIBUTES_TAB:
        element = (<div>node</div>);
        break;
      default:
        element = (<div>{`Unknown tab ${tab}`}</div>)
    }

    return element;
  }

  render () {
    const { open, expand, onClose } = this.props;

    if (!open) {
      return null;
    }

    const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const containerStyle = expand ? {...CONTAINER_STYLE, height: clientHeight - 167 } : CONTAINER_STYLE;

    return (
      <Dialog
        title={<ModalHeader />}
        open={open}
        contentStyle={CONTENT_STYLE}
        modal={false}
        autoScrollBodyContent={false}
        autoDetectWindowHeight={false}
        actions={this.actions}
        onRequestClose={onClose}
      >
        <div className="EditorScrollable" style={containerStyle}>
          {open && this.getTabElement()}
        </div>
      </Dialog>
    );
  }
}

BlockEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  tab: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,

  expand: PropTypes.bool.isRequired,

  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default translate('block_edit_modal')(BlockEditModal);
