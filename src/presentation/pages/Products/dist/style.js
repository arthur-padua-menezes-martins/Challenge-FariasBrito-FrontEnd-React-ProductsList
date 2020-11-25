"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledPageProductsGridContent = exports.StyledPageProductsGridContainer = void 0;
var styled_components_1 = require("styled-components");
exports.StyledPageProductsGridContainer = styled_components_1["default"].main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-areas: 'informations' 'offers cart';\n  grid-template-columns: 1FR 1FR;\n  margin: auto;\n  width: 90vw;\n\n  @media (max-width: ", ") {\n    grid-template-columns: 1FR;\n    grid-template-areas: 'informations' 'offers' 'cart';\n  }\n"], ["\n  display: grid;\n  grid-template-areas: 'informations' 'offers cart';\n  grid-template-columns: 1FR 1FR;\n  margin: auto;\n  width: 90vw;\n\n  @media (max-width: ", ") {\n    grid-template-columns: 1FR;\n    grid-template-areas: 'informations' 'offers' 'cart';\n  }\n"])), function (props) { return props.theme.resolution.firstBreakpointMobile; });
exports.StyledPageProductsGridContent = styled_components_1["default"].section(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: auto;\n  padding-bottom: 5rem;\n  justify-content: flex-start;\n  width: 36rem;\n  min-height: 5rem;\n  background-color: #000000;\n\n  ", "\n\n  article {\n    display: flex;\n    align-items: center;\n    margin-bottom: 5rem;\n    font-size: 2.4rem;\n    color: ", ";\n  }\n"], ["\n  margin: auto;\n  padding-bottom: 5rem;\n  justify-content: flex-start;\n  width: 36rem;\n  min-height: 5rem;\n  background-color: #000000;\n\n  ",
    "\n\n  article {\n    display: flex;\n    align-items: center;\n    margin-bottom: 5rem;\n    font-size: 2.4rem;\n    color: ", ";\n  }\n"])), function (props) {
    switch (props.area) {
        case 'informations':
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            grid-column: 1 / span 2;\n          "], ["\n            grid-column: 1 / span 2;\n          "])));
        case 'offers':
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
        case 'cart':
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
    }
}, function (props) { return props.theme.colors.bluePrimary; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
