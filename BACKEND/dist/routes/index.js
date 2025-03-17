"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const transaction_1 = require("./transaction");
exports.routes = (0, express_1.Router)();
exports.routes.use(transaction_1.transactionRoute);
