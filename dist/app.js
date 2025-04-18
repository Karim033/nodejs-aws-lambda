"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const product_controller_1 = __importDefault(require("./Products/product.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/products", product_controller_1.default);
app.use((req, res, next) => {
    res.status(404).json("Not Found Handler");
});
exports.handler = (0, serverless_http_1.default)(app);
