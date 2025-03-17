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
exports.TransactionController = void 0;
const Transaction_1 = require("src/models/Transaction");
const Transaction_2 = require("src/services/Transaction");
class transactionController {
    constructor() {
        this.addTransaction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = {
                type: req.body.type,
                category: req.body.category,
                amount: req.body.amount,
                date: Date(),
                description: req.body.description,
            };
            //validate data
            const { error, value } = Transaction_1.TransactionSchemaValidate.validate(data);
            if (error) {
                res.send(error.message);
            }
            else {
                const transaction = yield Transaction_2.transactionServices.createTransaction(value);
                console.log("1st point");
                console.log(transaction);
                res.status(201).send(transaction);
            }
        });
        //get all transactions
        this.getTransactions = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const transactions = yield Transaction_2.transactionServices.getTransactions();
            res.send(transactions);
        });
        //get a single transaction
        this.getATransaction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const transaction = yield Transaction_2.transactionServices.getTransaction(id);
            res.send(transaction);
        });
        //update a transaction
        this.updateTransaction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const transaction = yield Transaction_2.transactionServices.updateTransaction(id, req.body);
            res.send(transaction);
        });
        //delete a transaction
        this.deleteTransaction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield Transaction_2.transactionServices.deleteTransaction(id);
            res.send("Transaction deleted successfully");
        });
    }
}
exports.TransactionController = new transactionController();
