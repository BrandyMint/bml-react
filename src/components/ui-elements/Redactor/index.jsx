import { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';
import { ESC } from 'constants/keyCodes';

import classnames from 'classnames';
import MediumEditor from 'medium-editor';

import './Redactor.css';

// https://github.com/wangzuo/react-medium-editor/blob/master/lib/editor.js

const OPTIONS = {
  // disableReturn: true,
  paste: {
    forcePlainText: true,
    cleanPastedHTML: true,
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
  },
  toolbar: {
    allowMultiParagraphSelection: true,
    buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
  },
};

class Redactor extends Component {
  componentDidMount() {
    this.initEditor();
  }
  shouldComponentUpdate(nextProps, nextStates) {
    // TODO
    return false;
  }
  componentDidUpdate(prevProps) {
    if (this.mediumEditor) {
      this.mediumEditor.setContent(this.props.value);
    } else {
      this.initEditor();
    }
  }
  componentWillUnmount() {
    this.destroyEditor();
  }
  initEditor() {
    this.mediumEditor = new MediumEditor(findDOMNode(this), OPTIONS);
    this.mediumEditor.subscribe('blur', this.props.onBlur);
    this.mediumEditor.subscribe('editableKeyup', (event) => {
      if (event.keyCode === ESC) {
        event.target.blur();
        this.props.onCancel();
      }
    });
    this.mediumEditor.subscribe('editableInput', this.props.onChange);
    if (this.props.onKeyDownEnter) {
      this.mediumEditor.subscribe('editableKeydownEnter', this.props.onKeyDownEnter);
    }
  }
  destroyEditor() {
    if (!this.mediumEditor) return;

    // А зачем отписываться если мы ему делаем destroy?
    //this.mediumEditor.unsubscribe('blur', this.props.onBlur);
    //this.mediumEditor.unsubscribe('editableKeyup', handleKeyDown);
    //this.mediumEditor.unsubscribe('editableInput', this.props.onChange);
    //if (this.props.onKeyDownEnter) {
      //this.mediumEditor.unsubscribe('editableKeydownEnter', this.props.onKeyDownEnter);
    //}
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
  tagName: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDownEnter: PropTypes.func,
};

Redactor.defaultProps = {
  tagName: 'div',
  value: '',
};

export default Redactor;
