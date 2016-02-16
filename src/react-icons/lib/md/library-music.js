'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLibraryMusic = (function (_React$Component) {
    _inherits(MdLibraryMusic, _React$Component);

    function MdLibraryMusic() {
        _classCallCheck(this, MdLibraryMusic);

        _React$Component.apply(this, arguments);
    }

    MdLibraryMusic.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 10v23.36h23.36v3.2833333333333314h-23.36q-1.3283333333333331 0-2.3049999999999997-0.9783333333333317t-0.9750000000000001-2.306666666666665v-23.358333333333334h3.2833333333333337z m23.36 1.6400000000000006v-3.283333333333333h-6.640000000000001v9.143333333333333q-1.0933333333333337-0.8616666666666681-2.5-0.8616666666666681-1.7166666666666686 0-2.9666666666666686 1.25t-1.25 2.966666666666665 1.25 2.9333333333333336 2.9666666666666686 1.2100000000000009 2.9299999999999997-1.2133333333333347 1.211666666666666-2.9299999999999997v-9.216666666666667h5z m3.3599999999999994-8.280000000000001q1.3283333333333331 0 2.3049999999999997 0.9766666666666666t0.9750000000000014 2.3049999999999997v20q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.306666666666665 1.0166666666666657h-20q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0133333333333354-2.341666666666665v-20q0-1.3283333333333331 1.0166666666666657-2.3049999999999997t2.3433333333333337-0.9766666666666666h20z' })
            )
        );
    };

    return MdLibraryMusic;
})(React.Component);

exports['default'] = MdLibraryMusic;
module.exports = exports['default'];