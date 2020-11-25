"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
var http_response_1 = require("@/data/protocols/http/response/http-response");
__createBinding(exports, http_response_1, "IHttpResponse");
var http_client_1 = require("@/data/protocols/http/client/http-client");
__createBinding(exports, http_client_1, "IHttpClient");
__createBinding(exports, http_client_1, "IHttpClientParams");
