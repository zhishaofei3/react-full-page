"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Section = _react2["default"].createClass({
    displayName: "Section",

    getInitialState: function getInitialState() {
        return {
            action: this.props.current,
            slide: false,
            prev: this.props.prev,
            postionY: 0
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this = this;

        this.setState({
            action: nextProps.current,
            slide: nextProps.slide,
            prev: nextProps.prev,
            postionY: nextProps.postionY
        });
        setTimeout(function () {
            _this.setState({
                postionY: 0
            });
        }, 50);
    },
    render: function render() {
        var slideClass, slideStyle;
        if (this.state.action == this.props.id) {
            slideClass = this.state.slide ? "page-row slide page-row-" + this.props.id : "page-row current page-row-" + this.props.id;
            slideStyle = {
                transform: "translate(0px, " + this.state.postionY + "px)",
                transitionDuration: this.props.speed + "ms"
            };
        } else if (this.state.prev == this.props.id) {
            slideClass = this.state.slide ? "page-row current page-row-" + this.props.id : "page-row page-row-" + this.props.id;
        } else {
            slideClass = "page-row page-row-" + this.props.id;
        }

        return _react2["default"].createElement(
            "div",
            { ref: "row", className: slideClass, style: slideStyle },
            this.props.children
        );
    }
});

exports["default"] = Section;
module.exports = exports["default"];