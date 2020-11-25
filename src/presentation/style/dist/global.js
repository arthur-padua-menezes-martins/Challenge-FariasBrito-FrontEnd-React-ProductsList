"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.theme = void 0;
var styled_components_1 = require("styled-components");
exports.theme = {
    colors: {
        grayPrimary: '#394867',
        graySecondary: '#8C9BB5',
        grayTertiary: '#CFD7E4',
        grayQuaternary: '#E5E5E5',
        grayQuintenary: '#efefef',
        greenPrimary: '#4FFF95',
        bluePrimary: '#14274E',
        darkPrimary: '#1C1C1E',
        darkSecondary: '#363740',
        blackPrimary: '#0f0f0f ',
        blackSecondary: '#181818'
    },
    resolution: {
        firstBreakpointMobile: '900px'
    }
};
exports["default"] = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n* {\n  margin: 0rem;\n  padding: 0rem;\n  box-sizing: border-box;\n  letter-spacing: 0.1rem;\n  font-family: 'Ubuntu', 'Roboto', monospace, Arial, Helvetica, sans-serif;\n  font-size: 62.5%;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\nhtml {\n  scrollbar-width: thin;\n  scrollbar-color: ", " transparent;\n}\n\nbody {\n  line-height: 1.2rem;\n  color: #FFFFFF;\n  background-color: ", ";\n  height: auto;\n  pointer-events: none;\n}\n\ninput {\n  font-family: Roboto, monospace, Arial, Helvetica, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 0.4rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background: ", ";\n}\n\n.container  {\n  width: 100%;\n  height: 100vh;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-space-between {\n  justify-content: space-between;\n}\n\n.flex-end {\n  justify-content: flex-end;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n"], ["\n* {\n  margin: 0rem;\n  padding: 0rem;\n  box-sizing: border-box;\n  letter-spacing: 0.1rem;\n  font-family: 'Ubuntu', 'Roboto', monospace, Arial, Helvetica, sans-serif;\n  font-size: 62.5%;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\nhtml {\n  scrollbar-width: thin;\n  scrollbar-color: ", " transparent;\n}\n\nbody {\n  line-height: 1.2rem;\n  color: #FFFFFF;\n  background-color: ", ";\n  height: auto;\n  pointer-events: none;\n}\n\ninput {\n  font-family: Roboto, monospace, Arial, Helvetica, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 0.4rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background: ", ";\n}\n\n.container  {\n  width: 100%;\n  height: 100vh;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-space-between {\n  justify-content: space-between;\n}\n\n.flex-end {\n  justify-content: flex-end;\n}\n\n.flex-align-center {\n  align-items: center;\n}\n"])), function () { return exports.theme.colors.greenPrimary; }, function () { return exports.theme.colors.grayQuintenary; }, function () { return exports.theme.colors.greenPrimary; });
var templateObject_1;
