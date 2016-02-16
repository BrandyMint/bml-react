'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiNews = (function (_React$Component) {
    _inherits(TiNews, _React$Component);

    function TiNews() {
        _classCallCheck(this, TiNews);

        _React$Component.apply(this, arguments);
    }

    TiNews.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 6.666666666666667h-30c-1.8400000000000003 0-3.3333333333333335 1.4933333333333332-3.3333333333333335 3.333333333333333v20c0 1.8399999999999999 1.4933333333333336 3.3333333333333357 3.3333333333333335 3.3333333333333357h30c1.8400000000000034 0 3.3333333333333357-1.4933333333333323 3.3333333333333357-3.333333333333332v-20.000000000000004c0-1.8399999999999999-1.4933333333333323-3.333333333333334-3.3333333333333357-3.333333333333334z m-30 3.333333333333333h13.333333333333336v20h-13.333333333333336v-20z m30 20h-15v-20h15.005000000000003l-0.005000000000002558 20z m-1.6666666666666643-7.5c0-0.45833333333333215-0.375-0.8333333333333321-0.8333333333333357-0.8333333333333321h-1.6666666666666679c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333321v5c0 0.45833333333333215 0.375 0.8333333333333321 0.8333333333333321 0.8333333333333321h1.6666666666666679c0.4583333333333357 0 0.8333333333333357-0.375 0.8333333333333357-0.8333333333333321v-5z m-5-10c0-0.4583333333333339-0.375-0.8333333333333339-0.8333333333333321-0.8333333333333339h-5c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333339v8.333333333333336c0 0.45833333333333215 0.375 0.8333333333333321 0.8333333333333321 0.8333333333333321h5c0.45833333333333215 0 0.8333333333333321-0.375 0.8333333333333321-0.8333333333333321v-8.333333333333334z m2.5 4.166666666666668h1.6666666666666643c0.4583333333333357 0 0.8333333333333357-0.375 0.8333333333333357-0.8333333333333339s-0.375-0.8333333333333339-0.8333333333333357-0.8333333333333339h-1.6666666666666679c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333339s0.375 0.8333333333333339 0.8333333333333321 0.8333333333333339z m0 3.333333333333332h1.6666666666666643c0.4583333333333357 0 0.8333333333333357-0.375 0.8333333333333357-0.8333333333333321s-0.375-0.8333333333333321-0.8333333333333357-0.8333333333333321h-1.6666666666666679c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333321s0.375 0.8333333333333321 0.8333333333333321 0.8333333333333321z m-8.333333333333336 5h5c0.45833333333333215 0 0.8333333333333321-0.375 0.8333333333333321-0.8333333333333321s-0.375-0.8333333333333321-0.8333333333333321-0.8333333333333321h-5c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333321s0.375 0.8333333333333321 0.8333333333333321 0.8333333333333321z m5 1.6666666666666679h-5c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333321s0.375 0.8333333333333321 0.8333333333333321 0.8333333333333321h5c0.45833333333333215 0 0.8333333333333321-0.375 0.8333333333333321-0.8333333333333321s-0.375-0.8333333333333321-0.8333333333333321-0.8333333333333321z m3.3333333333333357-13.333333333333334h1.6666666666666643c0.4583333333333357 0 0.8333333333333357-0.375 0.8333333333333357-0.8333333333333339s-0.375-0.8333333333333339-0.8333333333333357-0.8333333333333339h-1.6666666666666679c-0.45833333333333215 0-0.8333333333333321 0.375-0.8333333333333321 0.8333333333333339s0.375 0.8333333333333339 0.8333333333333321 0.8333333333333339z m-14.166666666666668-0.8333333333333339c0-0.4583333333333339-0.375-0.8333333333333339-0.8333333333333339-0.8333333333333339h-8.333333333333334c-0.45833333333333304 0-0.833333333333333 0.375-0.833333333333333 0.8333333333333339v5c0 0.45833333333333215 0.375 0.8333333333333321 0.833333333333333 0.8333333333333321h8.333333333333334c0.4583333333333339 0 0.8333333333333339-0.375 0.8333333333333339-0.8333333333333321v-5z m-0.8333333333333339 10.833333333333336h-8.333333333333334c-0.45500000000000007 0-0.833333333333333 0.375-0.833333333333333 0.8333333333333321s0.37833333333333297 0.8333333333333321 0.833333333333333 0.8333333333333321h8.333333333333334c0.4583333333333339 0 0.8333333333333339-0.375 0.8333333333333339-0.8333333333333321s-0.375-0.8333333333333321-0.8333333333333339-0.8333333333333321z m0-3.3333333333333357h-8.333333333333334c-0.45500000000000007 0-0.833333333333333 0.375-0.833333333333333 0.8333333333333321s0.37833333333333297 0.8333333333333321 0.833333333333333 0.8333333333333321h8.333333333333334c0.4583333333333339 0 0.8333333333333339-0.375 0.8333333333333339-0.8333333333333321s-0.375-0.8333333333333321-0.8333333333333339-0.8333333333333321z m0 6.666666666666668h-8.333333333333334c-0.45500000000000007 0-0.833333333333333 0.375-0.833333333333333 0.8333333333333321s0.37833333333333297 0.8333333333333321 0.833333333333333 0.8333333333333321h8.333333333333334c0.4583333333333339 0 0.8333333333333339-0.375 0.8333333333333339-0.8333333333333321s-0.375-0.8333333333333321-0.8333333333333339-0.8333333333333321z' })
            )
        );
    };

    return TiNews;
})(React.Component);

exports['default'] = TiNews;
module.exports = exports['default'];