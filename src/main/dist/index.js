"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
var App_1 = require("@/presentation/pages/App/App");
var global_1 = require("@/presentation/style/global");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: global_1.theme },
        react_1["default"].createElement(global_1["default"], null),
        react_1["default"].createElement(App_1["default"], null))), document.getElementById('app'));
