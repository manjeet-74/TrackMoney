import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API || "http://localhost:8080/api",
  withCredentials: true,
});

export interface ITransaction {
  type: string;
  amount: string;
  category: string;
  description: string;
}

export const makeTransaction = async (data: ITransaction) => {
  if (!data.amount) {
    console.log("No amount entered!");
    return;
  }
  try {
    const transactionMade = await API.post("/transaction", data);
    return transactionMade;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log("Transaction failed: ", error.message);
    throw error;
  }
};

export const getAllTransactions = async () => {
  try {
    const allTransactions = await API.get("/transaction");
    console.log(allTransactions);
    return allTransactions;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log("Transaction failed: ", error.message);
    throw error;
  }
};

export const getTypeTransactions = async (type: string) => {
  try {
    const typeTransactions = await API.get("/transaction/type", {
      params: { type },
    });
    console.log(typeTransactions);
    return typeTransactions;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log("transaction failed!.....", error.message);
    throw error;
  }
};
