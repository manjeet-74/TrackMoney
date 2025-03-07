import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getTransactions = async () => {
  const response = await axios.get(`${API_BASE_URL}/transactions`);
  return response.data;
};

export const addTransaction = async (transaction: any) => {
  const response = await axios.post(
    `${API_BASE_URL}/transactions`,
    transaction
  );
  return response.data;
};
