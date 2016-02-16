'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoLinkExternal = (function (_React$Component) {
    _inherits(GoLinkExternal, _React$Component);

    function GoLinkExternal() {
        _classCallCheck(this, GoLinkExternal);

        _React$Component.apply(this, arguments);
    }

    GoLinkExternal.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 30h-20v-19.924999999999997l5-0.07500000000000284v-5h-10v30h30v-12.5h-5v7.5z m-10-25l5 5-7.5 7.5 5 5 7.5-7.5 5 5v-15h-15z' })
            )
        );
    };

    return GoLinkExternal;
})(React.Component);

exports['default'] = GoLinkExternal;
module.exports = exports['default'];