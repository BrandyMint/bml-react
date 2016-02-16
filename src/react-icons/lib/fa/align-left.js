'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaAlignLeft = (function (_React$Component) {
    _inherits(FaAlignLeft, _React$Component);

    function FaAlignLeft() {
        _classCallCheck(this, FaAlignLeft);

        _React$Component.apply(this, arguments);
    }

    FaAlignLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 30v2.857142857142854q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-37.14285714285714q-0.5800000000000021 0-1.0042857142857162-0.42428571428571615t-0.4242857142857144-1.0042857142857073v-2.8571428571428577q0-0.5800000000000018 0.42428571428571427-1.0042857142857144t1.0042857142857144-0.42428571428571615h37.142857142857146q0.5799999999999983 0 1.0042857142857144 0.4242857142857126t0.42428571428570905 1.0042857142857144z m-8.57142857142857-8.57142857142857v2.8571428571428577q0 0.5800000000000018-0.4242857142857126 1.0042857142857144t-1.004285714285718 0.4242857142857126h-28.571428571428573q-0.5799999999999985 0-1.0042857142857127-0.4242857142857126t-0.4242857142857144-1.004285714285718v-2.8571428571428577q0-0.5800000000000018 0.42428571428571427-1.0042857142857144t1.0042857142857144-0.4242857142857126h28.57142857142857q0.5799999999999983 0 1.0042857142857144 0.4242857142857126t0.42428571428571615 1.004285714285718z m5.714285714285715-8.571428571428571v2.8571428571428577q0 0.5800000000000001-0.42428571428571615 1.0042857142857127t-1.0042857142857144 0.4242857142857126h-34.285714285714285q-0.5800000000000021 0-1.0042857142857162-0.4242857142857126t-0.4242857142857144-1.0042857142857144v-2.8571428571428577q0-0.5800000000000001 0.42428571428571427-1.0042857142857144t1.0042857142857144-0.4242857142857144h34.285714285714285q0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.42428571428571615 1.0042857142857144z m-8.57142857142857-8.571428571428571v2.8571428571428577q0 0.5800000000000001-0.4242857142857126 1.0042857142857144t-1.0042857142857216 0.4242857142857108h-25.714285714285715q-0.5799999999999985 0-1.0042857142857127-0.4242857142857144t-0.4242857142857144-1.0042857142857136v-2.8571428571428577q0-0.5800000000000001 0.42428571428571427-1.0042857142857144t1.0042857142857144-0.42428571428571393h25.714285714285715q0.5799999999999983 0 1.004285714285711 0.4242857142857144t0.42428571428571615 1.004285714285714z' })
            )
        );
    };

    return FaAlignLeft;
})(React.Component);

exports['default'] = FaAlignLeft;
module.exports = exports['default'];