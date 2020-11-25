"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var ComponentTable = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(style_1.StyledTBody, null, children)));
};
exports["default"] = ComponentTable;
