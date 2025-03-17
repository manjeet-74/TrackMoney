"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRoute = void 0;
const express_1 = require("express");
const Transaction_1 = require("src/controllers/Transaction");
exports.transactionRoute = (0, express_1.Router)();
exports.transactionRoute
    .route("/")
    .post(Transaction_1.TransactionController.addTransaction)
    .get(Transaction_1.TransactionController.getTransactions);
exports.transactionRoute
    .route("/:id")
    .get(Transaction_1.TransactionController.getATransaction)
    .put(Transaction_1.TransactionController.updateTransaction)
    .delete(Transaction_1.TransactionController.deleteTransaction);
