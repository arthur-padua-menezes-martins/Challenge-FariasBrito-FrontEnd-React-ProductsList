"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledContainerInitialTransition = void 0;
var styled_components_1 = require("styled-components");
var InitialTransition = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    stroke-dashoffset: 140;\n  }\n  30% {\n    stroke: #4FFF95;\n  }\n  75% {\n    opacity: 1\n  }\n  80% {\n    stroke-dashoffset: 0;\n    fill: #4FFF95;\n  }\n  100% {\n    stroke-dasharray: 280;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    stroke-dashoffset: 140;\n  }\n  30% {\n    stroke: #4FFF95;\n  }\n  75% {\n    opacity: 1\n  }\n  80% {\n    stroke-dashoffset: 0;\n    fill: #4FFF95;\n  }\n  100% {\n    stroke-dasharray: 280;\n    opacity: 0;\n  }\n"])));
exports.StyledContainerInitialTransition = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: auto;\n  height: 100vh;\n  \n  svg {\n    width: auto;\n    height: 60vh;\n    path {\n      fill: transparent;\n      stroke-width: 0.4;\n      stroke-dasharray: 140;\n      stroke-dashoffset: 140;\n      stroke: transparent;\n      animation: ", " ", " linear forwards;\n    }\n  }\n"], ["\n  margin: auto;\n  height: 100vh;\n  \n  svg {\n    width: auto;\n    height: 60vh;\n    path {\n      fill: transparent;\n      stroke-width: 0.4;\n      stroke-dasharray: 140;\n      stroke-dashoffset: 140;\n      stroke: transparent;\n      animation: ", " ", " linear forwards;\n    }\n  }\n"])), InitialTransition, function (props) { return ((props.timeout - 500) / 1000) + "s"; });
var templateObject_1, templateObject_2;
