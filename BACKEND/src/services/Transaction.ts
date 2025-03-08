import { ITransaction, Transaction } from "src/models/Transaction";

export class transactionService {
  async createTransaction(data: ITransaction) {
    try {
      const newTransaction = await Transaction.create(data);
      return newTransaction;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async getTransactions() {
    try {
      const transactions = await Transaction.find();
      return transactions;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  async getTransaction(id: string) {
    try {
      const transaction = await Transaction.findById({ _id: id });
      if (!transaction) {
        return "Transaction not available";
      }
      return transaction;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  //update a transaction
  async updateTransaction(id: string, data: ITransaction) {
    try {
      const transactions = await Transaction.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      );
      if (!transactions) {
        return "Transaction not available";
      }
      return transactions;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  //delete a transaction
  async deleteTransaction(id: string) {
    try {
      const transaction = await Transaction.findByIdAndDelete(id);
      if (!transaction) {
        return "Transaction not available";
      }
      console.log("Deleted transaction is: ", transaction);
    } catch (error: unknown) {
      console.log(error);
    }
  }
}

export const transactionServices = new transactionService();
