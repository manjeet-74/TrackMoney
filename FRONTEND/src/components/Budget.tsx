import { useEffect, useState } from "react";
import { FinanceCard } from "./FinanceCard";
import { getAllTransactions, ITransaction } from "../utils/api";

export const Budget = () => {
    const [allTransactions, setAllTransactions] = useState<ITransaction[]>([]);
    const [totalIncomeAmt, setTotalIncomeAmt] = useState(0);
    const [totalExpenseAmt, setTotalExpenseAmt] = useState(0);
    const [totalAmt, setTotalAmt] = useState(0)

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await getAllTransactions();
                if (res?.data) {
                    setAllTransactions(res.data);
                }
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, []);

    useEffect(() => {
        let income = 0, expense = 0;
        allTransactions.forEach((transaction: ITransaction) => {
            if (transaction.type === "income") {
                income += Number(transaction.amount);
            } else if (transaction.type === "expense") {
                expense += Number(transaction.amount);
            }
        });
        setTotalIncomeAmt(income);
        setTotalExpenseAmt(expense);
        setTotalAmt(income - expense)
    }, [allTransactions]); // Recalculate totals whenever transactions change

    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex flex-col items-start border-2 border-gray-200 p-4 w-full max-w-4xl rounded-lg shadow-lg">
                <h1 className="text-2xl">Budget</h1>
                <div className="mt-4 w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <FinanceCard amt={totalIncomeAmt} type="Income" />
                    <FinanceCard amt={totalExpenseAmt} type="Expense" />
                    <FinanceCard amt={totalAmt} type="Over All" />
                </div>
            </div>
        </div>
    );
};
