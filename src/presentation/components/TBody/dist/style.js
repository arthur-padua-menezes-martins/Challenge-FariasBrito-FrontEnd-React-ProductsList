"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledTBody = void 0;
var styled_components_1 = require("styled-components");
exports.StyledTBody = styled_components_1["default"].table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  & > tr:not(:last-child) {\n    border-bottom: 0.1rem ", " solid;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  & > tr:not(:last-child) {\n    border-bottom: 0.1rem ", " solid;\n  }\n"])), function (props) { return props.theme.colors.grayTertiary + "56"; });
var templateObject_1;
