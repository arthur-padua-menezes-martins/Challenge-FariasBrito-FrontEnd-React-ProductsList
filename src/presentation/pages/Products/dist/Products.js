"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var PageProducts = function (props) {
    var productsList = react_1.useState(props.productsList)[0];
    react_1.useEffect(function () {
        console.log('productsList: ', productsList);
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(style_1.StyledPageProductsGridContainer, { className: "container flex-align-center" },
            react_1["default"].createElement(style_1.StyledPageProductsGridContent, { area: 'informations', className: "flex-center flex-end" }),
            react_1["default"].createElement(style_1.StyledPageProductsGridContent, { area: 'offers', className: "flex-center" },
                react_1["default"].createElement("article", null, "Ofertas")),
            react_1["default"].createElement(style_1.StyledPageProductsGridContent, { area: 'cart', className: "flex-center" },
                react_1["default"].createElement("article", null, "Carrinho")))));
};
exports["default"] = PageProducts;
