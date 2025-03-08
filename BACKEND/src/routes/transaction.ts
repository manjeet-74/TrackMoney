import { Router } from "express";
import { TransactionController } from "src/controllers/Transaction";

export const transactionRoute = Router();

transactionRoute
  .route("/")
  .post(TransactionController.addTransaction)
  .get(TransactionController.getTransactions);

transactionRoute
  .route("/:id")
  .get(TransactionController.getATransaction)
  .put(TransactionController.updateTransaction)
  .delete(TransactionController.deleteTransaction);
