"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionSchemaValidate = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
exports.TransactionSchemaValidate = joi_1.default.object({
    type: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    amount: joi_1.default.number().required(),
    date: joi_1.default.date().required(),
    description: joi_1.default.string().required(),
});
const transactionSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
});
exports.Transaction = (0, mongoose_1.model)("Transaction", transactionSchema);
