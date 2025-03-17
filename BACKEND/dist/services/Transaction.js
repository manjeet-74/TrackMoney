"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionServices = exports.transactionService = void 0;
const Transaction_1 = require("src/models/Transaction");
class transactionService {
    createTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("window to create a transaction");
                const newTransaction = yield Transaction_1.Transaction.create(data);
                console.log("newT", newTransaction);
                return newTransaction;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactions = yield Transaction_1.Transaction.find();
                return transactions;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTransaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = yield Transaction_1.Transaction.findById({ _id: id });
                if (!transaction) {
                    return "Transaction not available";
                }
                return transaction;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //update a transaction
    updateTransaction(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactions = yield Transaction_1.Transaction.findByIdAndUpdate({ _id: id }, data, { new: true });
                if (!transactions) {
                    return "Transaction not available";
                }
                return transactions;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    //delete a transaction
    deleteTransaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = yield Transaction_1.Transaction.findByIdAndDelete(id);
                if (!transaction) {
                    return "Transaction not available";
                }
                console.log("Deleted transaction is: ", transaction);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.transactionService = transactionService;
exports.transactionServices = new transactionService();
