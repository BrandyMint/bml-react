import { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';

import classnames from 'classnames';
import MediumEditor from 'medium-editor';

import './Redactor.css';

const OPTIONS = {
  disableReturn: true,
  paste: {
    cleanPastedHTML: true,
  },
  toolbar: false,
};

class Redactor extends Component {
  componentDidMount() {
    if (!this.props.readOnly) {
      this.initEditor();
    }
  }
  shouldComponentUpdate(nextProps) {
    return findDOMNode(this).innerHTML !== nextProps.value;
  }
  componentDidUpdate(prevProps) {
    findDOMNode(this).innerHTML = this.props.value;

    if (prevProps.readOnly !== this.props.readOnly) {
      if (this.props.readOnly) {
        this.destroyEditor();
      } else {
        this.initEditor();
      }
    }
  }
  componentWillUnmount() {
    this.destroyEditor();
  }
  initEditor() {
    this.mediumEditor = new MediumEditor(findDOMNode(this), OPTIONS);
    this.mediumEditor.subscribe('blur', this.props.onBlur);
    this.mediumEditor.subscribe('editableKeyup', this.props.onKeyDown);
    this.mediumEditor.subscribe('editableKeydownEnter', this.props.onKeyDownEnter);
  }
  destroyEditor() {
    if (!this.mediumEditor) return;

    this.mediumEditor.unsubscribe('blur', this.props.onBlur);
    this.mediumEditor.unsubscribe('editableKeyup', this.props.onKeyDown);
    this.mediumEditor.unsubscribe('editableKeydownEnter', this.props.onKeyDownEnter);
    this.mediumEditor.destroy();
    this.mediumEditor = null;
  }
  render() {
    const { className, tagName, value } = this.props;

    return createElement(
      tagName,
      {
        className: classnames('Redactor', className),
        dangerouslySetInnerHTML: { __html: value },
      },
    );
  }
}

Redactor.propTypes = {
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  tagName: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyDownEnter: PropTypes.func,
};

Redactor.defaultProps = {
  readOnly: true,
  tagName: 'div',
  value: '',
};

export default Redactor;
