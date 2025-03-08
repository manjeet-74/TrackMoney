import { Request, Response } from "express";
import { TransactionSchemaValidate } from "src/models/Transaction";
import { transactionServices } from "src/services/Transaction";

class transactionController {
  addTransaction = async (req: Request, res: Response) => {
    const data = {
      type: req.body.type,
      category: req.body.category,
      amount: req.body.amount,
      date: req.body.date,
      description: req.body.description,
    };

    //validate data
    const { error, value } = TransactionSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const transaction = await transactionServices.createTransaction(value);
      res.status(201).send(transaction);
    }
  };

  //get all transactions
  getTransactions = async (req: Request, res: Response) => {
    const transactions = await transactionServices.getTransactions();
    res.send(transactions);
  };

  //get a single transaction
  getATransaction = async (req: Request, res: Response) => {
    const id = req.params.id;
    const transaction = await transactionServices.getTransaction(id);
    res.send(transaction);
  };

  //update a transaction
  updateTransaction = async (req: Request, res: Response) => {
    const id = req.params.id;
    const transaction = await transactionServices.updateTransaction(
      id,
      req.body
    );
    res.send(transaction);
  };

  //delete a transaction
  deleteTransaction = async (req: Request, res: Response) => {
    const id = req.params.id;
    await transactionServices.deleteTransaction(id);
    res.send("Transaction deleted successfully");
  };
}

export const TransactionController = new transactionController();