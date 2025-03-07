import { Document, model, Schema } from "mongoose";
import Joi from "joi";

export const TransactionSchemaValidate = Joi.object({
  type: Joi.string().required(),
  category: Joi.string().required(),
  amount: Joi.number().required(),
  date: Joi.date().required(),
  description: Joi.string().required(),
});

export interface ITransaction extends Document {
  type: string;
  category: string;
  amount: number;
  date: Date;
  description: string;
}

const transactionSchema = new Schema<ITransaction>({
  type: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

export const Transaction = model<ITransaction>(
  "Transaction",
  transactionSchema
);
